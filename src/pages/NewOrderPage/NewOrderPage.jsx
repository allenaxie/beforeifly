import { useEffect  } from "react";
import { BackTop } from "antd";
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

    let style1 = {height: '100vh'}
   
    return  (
        <div 
        className="neworderpage-main"
        >
            <CartDetail cart={cart} setCart={setCart} stripe={stripe}/>
            <BackTop visibilityHeight={800}/>
        </div>
    )
}