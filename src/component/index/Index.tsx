import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { isLoggedIn } from "../../action/Login";
import { useCookies } from "react-cookie";
import { Loading } from "../Loading/Loading";
import { AuthIndex } from "./AuthIndex";
import { UnauthIndex } from "./UnauthIndex";
import { PaymentInfo } from "./PaymentInfo";
import { IndexBackground } from "./IndexBackground";

export default () => {
    const [cookies] = useCookies()
    const [screenState, setScreenState] = useState<boolean | 'loading'>('loading')

    const paymentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        isLoggedIn(cookies).then(isAuth => {
            setScreenState(isAuth)
        })
    }, [])

    const onDownArrowClicked = () => {
        paymentRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return <Box>
        <IndexBackground onDownArrowClicked={onDownArrowClicked} />
        {
            screenState == 'loading' ?
                <Loading /> : screenState ?
                <AuthIndex /> :
                <UnauthIndex />
        }
        <PaymentInfo ref={paymentRef} />
    </Box>
}
