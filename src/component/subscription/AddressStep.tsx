import { Button, Stack, TextField, debounce } from "@mui/material"
import { SearchBar } from "../SearchBar/SearchBar"
import { useCallback, useState } from "react"
import { getAddressesByQuery } from "../../action/Subscription"

type Props = {
    address: string,
    onAddressChanged: (value: string) => void,
    apartment: string,
    onApartmentChanged: (value: string) => void,
    room: string,
    onRoomChanged: (value: string) => void,
    onSubmit: () => void,
    onBack: () => void
}

export const AddressStep = (props: Props) => {
    const [hint, setHint] = useState<'loading' | { id: string, name: string }[]>([])
    const [isHintSelected, setIsHintSelected] = useState(false)

    const [addressError, setAddressError] = useState("")
    const [apartmentError, setApartmentError] = useState("")

    const onHintClicked = async (query: string) => {
        setHint([])
        setIsHintSelected(true)
        props.onAddressChanged(query)
    }

    const loadHints = async (query: string) => {
        if (query.length == 0) {
            setHint([])
            return
        }

        setIsHintSelected(false)
        setHint('loading')
        const addresses = await getAddressesByQuery(query)
        setHint(addresses)
    }

    const loadHintsCallback = useCallback(debounce(loadHints, 300), [])

    const onQueryChanged = async (query: string) => {
        props.onAddressChanged(query)
        loadHintsCallback(query)
    }

    const validateFields = () => {
        const isAddressCorrect = validateAddress()
        const isApartmentCorrect = validateApartment()

        return isAddressCorrect && isApartmentCorrect
    }

    const validateAddress = () => {
        if (props.address.length == 0) {
            setAddressError("Введите адрес")
            return false
        } else if (!isHintSelected) {
            setAddressError("Выберите корректный адрес из списка")
            return false
        } else {
            setAddressError("")
            return true
        }
    }

    const validateApartment = () => {
        if (props.apartment.length == 0) {
            setApartmentError("Введите номер квартиры")
            return false
        } else if (Number.parseInt(props.apartment) < 0) {
            setApartmentError("Введите корректный номер квартиры")
            return false
        } else {
            setApartmentError("")
            return true
        }
    }

    return <Stack spacing={3}>
        <SearchBar
            label="Адрес"
            query={props.address} 
            onQueryChanged={onQueryChanged}
            hintState={hint} onHintClicked={onHintClicked}
            errorText={addressError}
        />
        <TextField
            variant="outlined"
            type="number"
            label="Квартира"
            value={props.apartment}
            onChange={e => props.onApartmentChanged(e.target.value)}
            error={apartmentError.length > 0}
            helperText={apartmentError}
            fullWidth
        />
        <TextField
            variant="outlined"
            type="number"
            label="Комната (необязательно)"
            value={props.room}
            onChange={e => props.onRoomChanged(e.target.value)}
            fullWidth
        />
        <Stack direction="row" spacing={5}>
            <Button
                variant="contained"
                onClick={() => validateFields() && props.onSubmit()}
            >Cледующий шаг</Button>
            <Button
                variant="outlined"
                onClick={props.onBack}
            >Назад</Button>
        </Stack>
    </Stack>
}
