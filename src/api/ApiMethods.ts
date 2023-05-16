import { duration } from "@mui/material";
import axios from "axios";

export namespace Api {
    const Api = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:3001"
    })
    
    export const registerUser = async (value: { username: string, email: string, password: string }) => 
        Api.post("/user/register", { ...value })
    
    export const loginUser = async (value: { email: string, password: string }) => Api.post("/user/login", { ...value })
    
    export const logoutUser = async () => Api.post('/user/logout')

    export const checkUser = async () => Api.get('/user/check')

    export const checkUserAdmin = async () => Api.get('/user/check-admin')

    export const getAddressesByQuery = async (query: string) => Api.get(`/address/search?query=${query}`)
    
    export const postOrder = async (value: { 
        firstName: string, 
        lastName: string, 
        patronymic: string, 
        address: string, 
        apartment: string, 
        room?: string, 
        duration: string 
    }) =>
        Api.post("/order/post", { 
            first_name: value.firstName,
            last_name: value.lastName,
            patronymic: value.patronymic,
            address: value.address,
            apartment: value.apartment,
            room: value.room,
            month_count: value.duration
        })

    export const getSubscriptionList = async () => Api.get('/order/list')

    export const getOrderList = async () => Api.get('/private/order/list')

    export const submitOrder = async (orderId: string) => Api.post('/private/order/submit', { 'order_id': orderId })

    export const rejectOrder = async (orderId: string, message: string) => Api.post('/private/order/reject', { 'order_id': orderId, 'message': message })
    
    export const getNewspaperArchive = async (value: { since: EpochTimeStamp | -1 }) => Api.get(`/archive/list?since=${value.since}`)
}
