const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');
const cors = require('cors');

// Always require and configure near the top 
require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
}));

// Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object to req.user
// Mount BEFORE routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));


app.use('/create-checkout-session', ensureLoggedIn, require('./routes/api/payments'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_08e47c65e832335c39a611da3e1125a7f3689808b8d53e662032ab0963f9e9a6";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});




// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});







