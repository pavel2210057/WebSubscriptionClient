import { useState } from "react";
import { register } from "../../action/Login";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import AppBar from "../AppBar/AppBar";

export default () => {
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [repeatedPassword, setRepeatedPassword] = useState("")

    const navigate = useNavigate()

    const validateForm = () => {
        validateUsername()
        validateEmail()
        validatePassword()

        const isValid = usernameError.length == 0 && emailError.length == 0 && passwordError.length == 0
        return isValid
    }

    const validateUsername = () => {
        if (username.length == 0)
            setUsernameError("Пустое имя пользователя")
        else if (username.length < 8 || username.length > 24)
            setUsernameError("Длина имени должна быть от 8 до 24 символов")
        else
            setUsernameError("")
    }

    const validateEmail = () => {
        if (email.length == 0)
            setEmailError("Пустой email")
        else if (email.length > 255)
            setEmailError("Слишком длинный email")
        else if (!/\S+@\S+\.\S+/.test(email))
            setEmailError("Введен некорректный email")
        else
            setEmailError("")
    }

    const validatePassword = () => {
        if (password.length == 0)
            setPasswordError("Пустой пароль")
        else if (password.length < 8 || password.length > 64)
            setPasswordError("Длина пароля должна быть от 8 до 64 символов")
        else if (password != repeatedPassword)
            setPasswordError("Пароли не совпадают")
        else
            setPasswordError("")
    }

    const onSubmit = async () => {
        console.log("onSubmit1")
        if (!validateForm())
            return

        console.log("onSubmit")
        const isSuccess = await register({ username, email, password })
        if (isSuccess)
            navigate('/login')
    }

    return <Box sx={{ minHeight: "95vh"}}>
        <AppBar title="Регистрация" isAuth={false} />
        <Stack sx={{ maxWidth: "256px", padding: "20px", margin: "auto" }} spacing={2}>
            <TextField
                variant='standard'
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Имя пользователя"
                error={usernameError.length != 0}
                helperText={usernameError}
                fullWidth
            />
            <TextField 
                variant='standard' 
                type="email"
                defaultValue={email} 
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
                error={emailError.length != 0}
                helperText={emailError}
                fullWidth
            />
            <TextField 
                variant='standard' 
                type="password"
                defaultValue={password} 
                onChange={(e) => setPassword(e.target.value)}
                label='Пароль'
                error={passwordError.length != 0}
                helperText={passwordError}
                fullWidth
            />
            <TextField 
                variant='standard'
                type="password"
                defaultValue={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
                label='Повторите пароль'
                fullWidth
            />
            <Button variant='text' onClick={onSubmit}>Регистрация</Button>
        </Stack>
    </Box>
}
