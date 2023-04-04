import axios from "axios";
import {Address} from "../domain/Address";

const Api = axios.create({
    baseURL: "url"
})

export const requestRegisterUser = async (value: { username: string, email: string, password: string }) => Api.post("reg")
export const requestLoginUser = async (value: { email: string, password: string }) => Api.post("log")
export const requestAddressesByQuery = async (query: string) => Api.get('address')