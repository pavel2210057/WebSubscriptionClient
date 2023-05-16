import { Box, Button, Stack, TextField } from "@mui/material"
import { useEffect } from "react"

type Props = {
    firstName: string,
    onFirstNameChanged: (value: string) => void,
    lastName: string,
    onLastNameChanged: (value: string) => void,
    patronymic: string,
    onPatronymicChanged: (value: string) => void,
    onSubmit: () => void
}

export const NameStep = (props: Props) => {

    useEffect(() => {

    }, [ props.firstName, props.lastName, props.patronymic ])

    return <Box>
        <Stack spacing={3}>
            <TextField 
                variant="outlined"
                defaultValue={props.firstName}
                onChange={e => props.onFirstNameChanged(e.target.value)}
                label="Имя"
                fullWidth
            />
            <TextField 
                variant="outlined"
                defaultValue={props.lastName}
                onChange={e => props.onLastNameChanged(e.target.value)}
                label="Фамилия"
                fullWidth
            />
            <TextField 
                variant="outlined"
                defaultValue={props.patronymic}
                onChange={e => props.onPatronymicChanged(e.target.value)}
                label="Отчество"
                fullWidth
            />
        </Stack>
        <Stack direction="row" paddingTop="20px">
            <Button variant="contained" onClick={() => props.onSubmit()}>Следующий шаг</Button>
        </Stack>
    </Box>
}
