import { useEffect  } from "react";
import 'antd/dist/antd.css';
import "./NewOrderPage.css";
import * as ordersAPI from "../../utilities/orders-api";
import CartDetail from "../../components/CartDetail/CartDetail";


export default function NewOrderPage ({cart, setCart, stripe}) {

    useEffect (function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, [])

    return  (
        <div className="neworderpage-main">
            <CartDetail cart={cart} setCart={setCart} stripe={stripe}/>

        </div>
    )
}