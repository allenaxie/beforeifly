import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList ({ordersList}) {

    console.log('ordersList',ordersList)
    const order = ordersList.map(o =>
        <OrderListItem order={o} />
        )

    return (
        <>
        {order}
        </>
    )
}