import { Box, Divider, Drawer } from "@mui/material"
import { DrawerButton } from "./DrawerButton"
import { Link, useNavigate } from "react-router-dom"
import { checkIsAdmin, logout } from "../../action/Login"
import HomeIcon from '@mui/icons-material/Home'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useEffect, useState } from "react"

const AdminMenu = () => {
    return <Box sx={{ marginTop: "10px" }}>
        <Link to='/private/order/list'>
            <DrawerButton icon={ <SupervisorAccountIcon /> } title="Заявки на подписку" />
        </Link>
    </Box>
}

type Props = {
    isOpen: boolean,
    onClose: () => void
}

export default (props: Props) => {
    const [isAdmin, setIsAdmin] = useState(false)
    
    const navigate = useNavigate()

    const onLogoutClick = async () => {
        const isSuccess = await logout()
        if (isSuccess)
            navigate('/')
    }

    useEffect(() => {
        checkIsAdmin().then(setIsAdmin)
    }, [])

    return <Drawer open={props.isOpen} onClose={props.onClose}>
        <Link to='/'>
            <DrawerButton icon={ <HomeIcon /> } title="Главная" />
        </Link>
        <Divider />
        <Link to="/order/create">
            <DrawerButton icon={ <AddBoxIcon /> } title="Подписка" />
        </Link>
        <Link to="/order/list">
            <DrawerButton icon={ <LibraryAddCheckIcon /> } title="Мои подписки" />
        </Link>
        <Divider />
        <Link target="_blank" to="https://magmetall.ru/news/archive/">
            <DrawerButton icon={ <ArrowOutwardIcon /> } title="Выпуски газет" />
        </Link>
        <Divider />
        <DrawerButton icon={ <ExitToAppIcon /> } title="Выйти" onClick={onLogoutClick} />
        {
            isAdmin ?
                <AdminMenu /> :
                null
        }
    </Drawer>
}
