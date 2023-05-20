import { Box, Typography } from "@mui/material"
import { Order, OrderStatus } from "../../action/Subscription"

const statusToStatusName = (status: OrderStatus) => {
    let statusName: string
    switch (status) {
        case OrderStatus.InProgress: statusName = "В обработке"; break;
        case OrderStatus.Accepted: statusName = "Ожидает оплаты"; break;
        case OrderStatus.Rejected: statusName = "Отказано"; break;
        case OrderStatus.Paid: statusName = "Оплачено"; break;
    }

    return statusName
}

type Props = {
    order: Order
}

export const UserInfo = (props: Props) => <Box>
    <Typography><Typography component="span" fontWeight="bold">Имя:</Typography> {props.order.first_name}</Typography>
    <Typography><Typography component="span" fontWeight="bold">Фамилия:</Typography> {props.order.last_name}</Typography>
    {
        props.order.patronymic ?
            <Typography><Typography component="span" fontWeight="bold">Отчество:</Typography> {props.order.patronymic}</Typography> :
            null
    }
    <Typography><Typography component="span" fontWeight="bold">Адрес:</Typography> {props.order.address}</Typography>
    <Typography><Typography component="span" fontWeight="bold">Квартира:</Typography> {props.order.apartment}</Typography>
    {
        props.order.room ?
            <Typography><Typography component="span" fontWeight="bold">Комната:</Typography> {props.order.room}</Typography> :
            null
    }
    <Typography><Typography component="span" fontWeight="bold">Текущий статус:</Typography> {statusToStatusName(props.order.status)}</Typography>
    {
        props.order.message ?
            <Typography><Typography component="span" fontWeight="bold">Причина отказа:</Typography> {props.order.message}</Typography> :
            null
    }
</Box>
