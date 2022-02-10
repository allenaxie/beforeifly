import {Table, Tag, Space } from "antd";


export default function OrderListItem ({order}) {
    
    console.log('order', order)
    
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

    const data = [
        {
            key: order.id,
            orderId: order.orderId,
            datePurchased: new Date(order.updatedAt).toLocaleDateString(),
            orderTotal: order.orderTotal,
            totalQty: order.totalQty,
        }
    ]


    return (
        <Table columns={columns} dataSource={data}/>

    )
}