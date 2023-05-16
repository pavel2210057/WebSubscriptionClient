import {isLoggedIn} from "../../action/Login";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { Box } from "@mui/material";
import { Loading } from "../Loading/Loading";

type Props = {
    authRoute: boolean,
    children: React.ReactNode
}

const AuthRoute = (props: Props) => {
    const [isLoading, setisLoading] = useState(true)

    const [cookies] = useCookies()
    const navigate = useNavigate()

    useEffect(() => {
        isLoggedIn(cookies).then(isAuth => {
            if (props.authRoute != isAuth)
                navigate('/')
            else
                setisLoading(false)
        })
    }, [])

    return <Box>
        {
            isLoading ? <Loading /> : props.children
        }
    </Box>
}

export default AuthRoute
