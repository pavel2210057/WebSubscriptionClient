import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { Order, OrderStatus } from "../../action/Subscription"
import { RobokassaForm } from "../RobokassaForm/RobokassaForm"
import { UserInfo } from "../UserInfo/UserInfo"

type Props = {
    order: Order
}

export const SubscriptionCard = (props: Props) => (<Card>
    <CardContent>
        <UserInfo order={props.order} />
    </CardContent>
    {
        props.order.status == OrderStatus.Accepted ?
        <CardActions>
            <RobokassaForm paymentUrl={props.order.payment_url} />
        </CardActions> :
        null
    }
</Card>)
