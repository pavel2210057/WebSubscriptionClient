import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Order, submitOrder } from "../../action/Subscription"
import { useState } from "react"

type Props = {
    order: Order,
    onRejectClicked: (orderId: string) => void
}

export const OrderCard = (props: Props) => {
    const [openRejectModal, setOpenRejectModal] = useState(false)
    
    const onSubmitClicked = async () => {
        submitOrder(props.order.id)
    }

    return <Box>
        <Card>
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
                <Button variant="contained" onClick={onSubmitClicked}>Подтвердить</Button>
                <Button variant="outlined" onClick={() => props.onRejectClicked(props.order.id)}>Есть проблемы</Button>
            </CardActions>
        </Card>
    </Box>
}