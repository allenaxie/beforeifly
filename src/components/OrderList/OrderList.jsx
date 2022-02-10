import OrderListItem from "../OrderListItem/OrderListItem";
import {Table} from "antd";

export default function OrderList ({ordersList}) {

    console.log('ordersList',ordersList)

  let data = []

    const order = ordersList.map((order, idx) =>  
            data.push(
            {
            key: order.id,
            orderId: order.orderId,
            datePurchased: new Date(order.updatedAt).toLocaleDateString(),
            orderTotal: order.orderTotal,
            totalQty: order.totalQty,
             })
    )
    // const order = ordersList.map((o, idx) =>
    //         <OrderListItem order={o} key={idx}/>
    // )

    const columns = [
        {
            title: "Order ID",
            dataIndex: "orderId",
            key: "orderId", 
        },
        {
            title: "Date Purchased",
            dataIndex: "datePurchased",
            key: "datePurchased", 
            sorter: (a,b) => a.updatedAt - b.updatedAt,
        },
        {
            title: "Order Total",
            dataIndex: "orderTotal",
            key: "orderTotal", 
            sorter: (a,b) => a.orderTotal - b.orderTotal,
        },
        {
            title: "No. of Items",
            dataIndex: "totalQty",
            key: "totalQty", 
        },
    ]

    return (
        // <>
        //     {order}
        // </>
      <Table 
      columns={columns}
      dataSource={data}
      pagination={false}
      
      />
    )
}