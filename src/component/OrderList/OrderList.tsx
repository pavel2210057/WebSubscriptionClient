import { useEffect, useState } from "react"
import { Order, getOrderList, rejectOrder } from "../../action/Subscription"
import { Box, Modal, Stack } from "@mui/material"
import { Loading } from "../Loading/Loading"
import { OrderCard } from "./OrderCard"
import { RejectModal } from "./RejectModal"
import AppBar from "../AppBar/AppBar"

type ListState = Order[] | 'loading'

export const OrderList = () => {
    const [openRejectModal, setOpenRejectModal] = useState(false)
    const [orderForReject, setOrderForReject] = useState('')

    const [list, setList] = useState<ListState>('loading')

    useEffect(() => {
        loadOrderList()
    }, [])

    const loadOrderList = async () => {
        const list = await getOrderList()
        setList(list)
    }

    const onRejectClicked = async (orderId: string) => {
        setOpenRejectModal(true)
        setOrderForReject(orderId)
    }

    const onRejectSubmitClicked = async (message: string) => {
        setOpenRejectModal(false)
        rejectOrder(orderForReject, message)
    }

    return <Box>
        <AppBar title="Заявки на подписку" isAuth />
        <Stack
            sx={{ 
                paddingTop: "20px", 
                maxWidth: "512px",
                width: "100%",
                margin: "auto"
            }}
            spacing={3}
        >
            {
                list == 'loading' ?
                    <Loading /> :
                    list.map(item =>
                        <OrderCard order={item} onRejectClicked={onRejectClicked} />
                    )
            }
        </Stack>
        <RejectModal open={openRejectModal} onClose={() => setOpenRejectModal(false)} onReject={onRejectSubmitClicked}  />
    </Box>
}
