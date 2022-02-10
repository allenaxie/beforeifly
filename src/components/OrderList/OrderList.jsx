import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList ({ordersList}) {

    console.log('ordersList',ordersList)
    const order = ordersList.map((o, idx) =>
        <OrderListItem order={o} key={idx}/>
        )

    return (
        <>
        {order}
        </>
    )
}