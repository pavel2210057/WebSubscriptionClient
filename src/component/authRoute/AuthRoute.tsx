import {isLoggedIn} from "../../action/Login";
import {useCookies} from "react-cookie";
import * as React from "react";
import {Navigate} from "react-router-dom";
import {FunctionComponent} from "react";

const AuthRoute: FunctionComponent<any> = (props) => {
    const cookies = useCookies()[0]

    if (!isLoggedIn(cookies))
        return <Navigate to='/' />

    return props.children
}

export default AuthRoute
