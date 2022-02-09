import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderList from "../../components/OrderList/OrderList";


export default function OrderHistoryPage({user, setUser}) {
  
  const [orderHistory, setOrderHistory] = useState([])
  const [activeOrder, setActiveOrder] = useState(orderHistory[0])

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      setOrderHistory(orders);
    }
    getOrders();
  },[])
  

  console.log('orderHistory',orderHistory);



  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <OrderList ordersList={orderHistory} />
    </div>
  )
}

