import {Table, Button, Modal, Card, Image, Row, Col, Typography, Affix, Statistic} from "antd";
import { useState } from "react"
import ModalOrderItem from "../ModalOrderItem/ModalOrderItem";

export default function OrderList ({ordersList}) {

    const { Meta } = Card
    const { Title } = Typography

    // Modal
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalOrder, setModalOrder] = useState(ordersList[0])


    async function showModal (evt) {
        console.log(evt.target.innerText)
        const orderNum = evt.target.innerText
        // Find order that matches order ID
        const currentOrder = await ordersList.find(order => order.orderId === orderNum)
        // Track order clicked in modal
        setModalOrder(currentOrder)
        setIsModalVisible(true)
    }

    console.log('orderListPage-modalOrder',modalOrder)

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
            responsive:['sm'],
            sorter: (a,b) => a.orderTotal - b.orderTotal,
        },
        {
            title: "No. of Items",
            dataIndex: "totalQty",
            key: "totalQty", 
            responsive:['md'],
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
            {/* Render modal info if an order is clicked */}
            {modalOrder ?
            <>
            {/* Modal */}
            <Modal
            title={<Title level={3}>Order Details</Title>}
            visible={isModalVisible}
            width={1000}
            onCancel={handleCancelModal}
            footer = {[
                <Button key="submit" type="primary" onClick={handleCancelModal}>
                    OK
                </Button>
            ]}
            >
                <Row>
                    <Col span={14}>
                        {modalOrder.lineProducts.map((order, index) => <ModalOrderItem order={order} index={index}/>) }
                    </Col>
                    <Col 
                    span={10}
                    justify="end"
                    >
                            <Row>
                                <Col span={24} offset={3}>                             
                                    <Statistic
                                    title="Total: "
                                    prefix="$"
                                    value={modalOrder.orderTotal.toFixed(2)}
                                    />
                                   
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} offset={3}>                                        
                                        <Statistic
                                        title="Items: "
                                        value={`${modalOrder.totalQty}`}
                                        />

                                    
                                </Col>
                            </Row>
                        
                    </Col>
                </Row>

            </Modal>
            </>
            :
            ""
        }
        
        </>
    )
}