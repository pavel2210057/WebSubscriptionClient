import { Box, Button, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"

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
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const validateFields = () => {
        const isFirstNameCorrect = validateFirstName()
        const isLastNameCorrect = validateLastName()

        return isFirstNameCorrect && isLastNameCorrect
    }

    const validateFirstName = () => {
        if (props.firstName.length == 0) {
            setFirstNameError("Введите имя")
            return false
        } else {
            setFirstNameError("")
        }

        return true
    }

    const validateLastName = () => {
        if (props.lastName.length == 0) {
            setLastNameError("Введите фамилию")
            return false
        } else {
            setLastNameError("")
        }

        return true
    }

    return <Box>
        <Stack spacing={3}>
            <TextField 
                variant="outlined"
                defaultValue={props.firstName}
                onChange={e => props.onFirstNameChanged(e.target.value)}
                label="Имя"
                error={firstNameError.length > 0}
                helperText={firstNameError}
                fullWidth
            />
            <TextField 
                variant="outlined"
                defaultValue={props.lastName}
                onChange={e => props.onLastNameChanged(e.target.value)}
                label="Фамилия"
                error={lastNameError.length > 0}
                helperText={lastNameError}
                fullWidth
            />
            <TextField 
                variant="outlined"
                defaultValue={props.patronymic}
                onChange={e => props.onPatronymicChanged(e.target.value)}
                label="Отчество (необязательно)"
                fullWidth
            />
        </Stack>
        <Stack direction="row" paddingTop="20px">
            <Button variant="contained" onClick={() => validateFields() && props.onSubmit()}>Следующий шаг</Button>
        </Stack>
    </Box>
}
