import { Result, Button } from "antd";
import { useEffect, useState  } from "react";
import * as ordersAPI from "../../utilities/orders-api";




export default function CheckoutSuccessPage ({cart}) {

    

    const [session, setSession] = useState()

    useEffect(function () {
        async function getSession () {
            const sessionData = await ordersAPI.getSession();
            // setSession(sessionData)
        }
        getSession();
        console.log('checkout-success-cart',cart);
        console.log('session',session)
    }, [])


    return (
        <Result
            status="success"
            title="Purchase Successful!"
            // subTitle={`Order Confirmation: `}
            extra = {[
                <h3 key="message">We appreciate your kind support.  </h3>
            ]}

        />
           
       
    )
}