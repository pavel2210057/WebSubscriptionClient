import { HttpStatusCode } from "axios";
import {Api} from "../api/ApiMethods";
import { withErrorHandle } from "./requests";

export const getAddressesByQuery = async (query: string) => {
    const result = await Api.getAddressesByQuery(query)
    return result.data as { id: string, name: string }[]
}

export const getPrice = async () => withErrorHandle(async () => {
    const result = await Api.getPrice()

    if (result.status != 200)
        throw result.status

    if (!result.data.price)
        throw HttpStatusCode.InternalServerError

    return Number.parseInt(result.data.price)
})

export const postOrder = async (
    firstName: string,
    lastName: string,
    patronymic: string,
    address: string,
    apartment: string,
    room: string,
    duration: string
) => withErrorHandle(async () => {
    const result = await Api.postOrder({
        firstName: firstName,
        lastName: lastName,
        patronymic: patronymic,
        address: address,
        apartment: apartment,
        room: room,
        duration: duration
    })

    if (result.status != 200)
        throw result.status

    return true
})

export enum OrderStatus {
    InProgress = 0,
    Accepted = 1,
    Rejected = 2,
    Paid = 3
}

export type Order = {
    id: string,
    user_id: string,
    first_name: string,
    last_name: string,
    patronymic: string | null,
    address: string,
    apartment: string,
    room: string | null,
    month_count: string,
    status: OrderStatus,
    message: string,
    payment_url: string
}

export const getSubscriptionList = async () => {
    const list = await Api.getSubscriptionList()
    console.log(list)
    return list.data as Order[]
}

export const getOrderList = async () => {
    const list = await Api.getOrderList()
    console.log(list)
    return list.data as Order[]
}

export const submitOrder = async (orderId: string) => {
    try {
        await Api.submitOrder(orderId)
    } catch (e: any) {
        console.log(e)
    }
}

export const rejectOrder = async (orderId: string, message: string) => {
    try {
        await Api.rejectOrder(orderId, message)
    } catch (e: any) {
        console.log(e)
    }
}
