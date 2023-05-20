import {Api} from "../api/ApiMethods";
import { withErrorHandle } from "./requests";

type RegistrationFormData = {
    readonly username: string,
    readonly email: string,
    readonly password: string
}

export const register = async (formData: RegistrationFormData) => {
    const result = await Api.registerUser(formData)
    console.log(result)
    return true
}

type LoginFormData = {
    readonly email: string,
    readonly password: string
}

let isAdminCache = false

export const login = async (formData: LoginFormData) => {
    const result = await Api.loginUser(formData)

    if (result.status != 200)
        return false

    return true
}

export const logout = async () => {
    const result = await Api.logoutUser()

    if (result.status != 200)
        return false

    isAdminCache = false
    return true
}

export const isLoggedIn = async (cookies: { session?: string }) => withErrorHandle(async () => {
    if (!cookies.session)
        return false

    const result = await Api.checkUser()
    return result.status == 200
})

export const checkIsAdmin = async () => {
    if (isAdminCache)
        return true

    try {
        const result = await Api.checkUserAdmin()
        if (result.status != 200)
            return false
    } catch {
        return false
    }

    isAdminCache = true
    return true
}
