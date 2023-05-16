import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../../action/Login";
import { useCookies } from "react-cookie";
import { Loading } from "../Loading/Loading";
import { AuthIndex } from "./AuthIndex";
import { UnauthIndex } from "./UnauthIndex";

export default () => {
    const [cookies] = useCookies()
    const [screenState, setScreenState] = useState<boolean | 'loading'>('loading')

    useEffect(() => {
        isLoggedIn(cookies).then(isAuth => {
            setScreenState(isAuth)
        })
    }, [])

    return <Box>
        {
            screenState == 'loading' ?
                <Loading /> : screenState ?
                <AuthIndex /> :
                <UnauthIndex />
        }
    </Box>
}
