import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { Order, getSubscriptionList } from "../../action/Subscription"
import { Loading } from "../Loading/Loading"
import { SubscriptionCard } from "./SubscriptionCard"
import AppBar from "../AppBar/AppBar"

type ListState = Order[] | 'loading'

export const SubscriptionList = () => {
    const [list, setList] = useState<ListState>('loading')

    useEffect(() => {
        loadSubscriptionList()
    }, [])

    const loadSubscriptionList = async () => {
        const list = await getSubscriptionList()
        setList(list)
    }

    return <Box>
        <AppBar title="Мои подписки" isAuth />
        <Stack 
            spacing={3}
            sx={{
                width: "512px",
                margin: "auto",
                paddingTop: "20px"
            }}
        >
            {
                list == 'loading' ?
                    <Loading /> :
                    list.map(item => 
                        <SubscriptionCard order={item}/>
                    )
            }
        </Stack>
    </Box>
}
