import {Table, Button, Modal} from "antd";
import { useState } from "react"


export default function OrderList ({ordersList}) {

    // Modal
    const [isModalVisible, setIsModalVisible] = useState(false)
    const modalOrder = {};


    function showModal (evt) {
        console.log(evt.target.innerText)
        setIsModalVisible(true)
    }

    function handleCancelModal () {
        setIsModalVisible(false)
    }


    // Table data
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
            render: orderId => 
            <Button 
            type="link"
            onClick={showModal} 
            >
                {orderId}
            </Button>,
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
        <>
            {/* Table */}
            <Table 
            columns={columns}
            dataSource={data}
            pagination={false}
            />

            {/* Modal */}
            <Modal
            title={order}
            visible={isModalVisible}
            onCancel={handleCancelModal}
            >

            </Modal>
        
        </>
    )
}