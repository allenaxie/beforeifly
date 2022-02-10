import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderList from "../../components/OrderList/OrderList";
import { Typography, Result, Button } from "antd";
import { useNavigate } from "react-router-dom" 


export default function OrderHistoryPage({user, setUser}) {
  
  const [orderHistory, setOrderHistory] = useState([])
  const [activeOrder, setActiveOrder] = useState(orderHistory[0])
  const navigate = useNavigate();
  const { Title } = Typography;


  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      setOrderHistory(orders);
    }
    getOrders();
  },[])
  

  console.log('orderHistory',orderHistory);

  function handleClick () {
    navigate('/products')
  }


  return (
    <div>

      {orderHistory.length > 0 ? <OrderList ordersList={orderHistory} /> :
      <Result
      status="404"
      title= "Looks like you haven't made any orders yet"
      extra= {<Button type="primary" onClick={handleClick}>Start Shopping Now!</Button>}
      />
      
      }
    </div>
  )
}

