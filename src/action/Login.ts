import {AppAction} from "../reducer";
import {requestLoginUser, requestRegisterUser} from "../api/ApiMethods";
import {AuthAction} from "../reducer/AuthReducer";
import {Cookies, CookiesProvider, useCookies} from "react-cookie";

type RegistrationFormData = {
    readonly username: string,
    readonly email: string,
    readonly password: string,
    readonly repeatedPassword: string,
}

export const register = (formData: RegistrationFormData): AppAction<Boolean> => async (dispatch) => {
    const result = await requestRegisterUser(formData)
    return true
}

type LoginFormData = {
    readonly email: string,
    readonly password: string
}

export const login = (formData: LoginFormData): AppAction<Boolean> => async (dispatch) => {
    const result = await requestLoginUser(formData)

    if (result.status != 200)
        return false

    dispatch({ type: AuthAction.Login })
    return true
}

export const isLoggedIn = (cookies: { uid?: string }) => {
    return cookies.uid != null
}
