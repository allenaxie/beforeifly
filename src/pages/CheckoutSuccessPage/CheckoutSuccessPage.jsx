import { Result, Button } from "antd";
import { useEffect, useState  } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import "./CheckoutSuccessPage.css"



export default function CheckoutSuccessPage ({cart}) {

    

    const [session, setSession] = useState()

    useEffect(function () {
        async function checkout () {
            const sessionData = await ordersAPI.checkout();
        }
        checkout();
        console.log('checkout-success-cart',cart);
        console.log('session',session)
    }, [])


    return (
        <div className="checkout-success-main">
            <Result
                status="success"
                title="Purchase Successful!"
                extra = {[
                    <h3 key="message">We appreciate your kind support.  </h3>
                ]}
            />
        </div>
    )
}