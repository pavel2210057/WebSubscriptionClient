import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Order, OrderStatus } from "../../action/Subscription"

type Props = {
    order: Order
}

export const SubscriptionCard = (props: Props) => (<Card>
    <CardContent>
        <Typography>{props.order.first_name}</Typography>
        <Typography>{props.order.last_name}</Typography>
        {
            props.order.patronymic ?
                <Typography>{props.order.patronymic}</Typography> :
                null
        }
        <Typography>{props.order.address}</Typography>
        <Typography>{props.order.apartment}</Typography>
        {
            props.order.room ?
                <Typography>{props.order.room}</Typography> :
                null
        }
        <Typography>{props.order.status}</Typography>
        {
            props.order.message ?
                <Typography>{props.order.message}</Typography> :
                null
        }
    </CardContent>
    <CardActions>
        <Button variant="contained">Оплатить</Button>
    </CardActions>
</Card>)
