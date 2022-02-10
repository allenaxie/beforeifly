const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../../models/order');


module.exports = {
    handlePayment,

}

async function handlePayment (req,res) {
    // Find user's cart
    const cart = await Order.getCart(req.user._id);
    // Create and redirect to Stripe's checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: cart.lineProducts.map( product => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.product.name,
                    },
                    unit_amount: (product.extPrice * 100).toFixed(0),
                },
                quantity: product.qty,
            }
        }),
        success_url: `${process.env.SERVER_URL}/orders/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.SERVER_URL}/orders/cart`,
      });
    //   Redirect to Stripe payment page
      res.json({ url: session.url })
      console.log('payment finished')
}


