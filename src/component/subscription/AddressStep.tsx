import { Box, Button, Stack, TextField, Typography, debounce } from "@mui/material"
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

    const onHintClicked = async (query: string) => {
        setHint([])
        props.onAddressChanged(query)
    }

    const loadHints = async (query: string) => {
        if (query.length == 0) {
            setHint([])
            return
        }

        setHint('loading')
        const addresses = await getAddressesByQuery(query)
        setHint(addresses)
    }

    const loadHintsCallback = useCallback(debounce(loadHints, 300), [])

    const onQueryChanged = async (query: string) => {
        props.onAddressChanged(query)
        loadHintsCallback(query)
    }

    return <Stack spacing={3}>
        <SearchBar
            label="Адрес"
            query={props.address} 
            onQueryChanged={onQueryChanged}
            hintState={hint} onHintClicked={onHintClicked}
        />
        <TextField
            variant="outlined"
            type="number"
            label="Квартира"
            value={props.apartment}
            onChange={e => props.onApartmentChanged(e.target.value)}
            fullWidth
        />
        <TextField
            variant="outlined"
            type="number"
            label="Комната"
            value={props.room}
            onChange={e => props.onRoomChanged(e.target.value)}
            fullWidth
        />
        <Stack direction="row" spacing={5}>
            <Button
                variant="contained"
                onClick={props.onSubmit}
            >Cледующий шаг</Button>
            <Button
                variant="outlined"
                onClick={props.onBack}
            >Назад</Button>
        </Stack>
    </Stack>
}
