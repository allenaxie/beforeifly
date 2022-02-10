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
            orderTotal: order.orderTotal.toFixed(2),
            totalQty: order.totalQty,
             })
    )
 

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
            title: "Order Total ($)",
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