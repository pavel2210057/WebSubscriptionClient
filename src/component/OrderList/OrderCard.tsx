import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Order, submitOrder } from "../../action/Subscription"
import { UserInfo } from "../UserInfo/UserInfo"

type Props = {
    order: Order,
    onRejectClicked: (orderId: string) => void
}

export const OrderCard = (props: Props) => {    
    const onSubmitClicked = async () => {
        submitOrder(props.order.id)
    }

    return <Box>
        <Card>
            <CardContent>
                <UserInfo order={props.order} />
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={onSubmitClicked}>Подтвердить</Button>
                <Button variant="outlined" onClick={() => props.onRejectClicked(props.order.id)}>Есть проблемы</Button>
            </CardActions>
        </Card>
    </Box>
}