import {Profile} from "../domain/Profile";
import {Action} from "redux";

export enum AuthAction {
    Login = "auth/login",
    Logout = "auth/logout"
}

export type AuthState = {
    profile?: Profile
}

export default (state: AuthState = {}, action: Action<AuthAction>): AuthState => {
    return state
}
