import {AppAction} from "../reducer";
import {Address} from "../domain/Address";
import {requestAddressesByQuery} from "../api/ApiMethods";

export const getAddressesByQuery = (query: string): AppAction<Array<Address>> => async () => {
    const result = await requestAddressesByQuery(query)
    return []
}

type SubscriptionFormData = {

}

export const subscribe = (formData: SubscriptionFormData): AppAction<Boolean> => async () => {
    return true
}
