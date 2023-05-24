import {useState} from "react";
import {login} from "../../action/Login";
import {useNavigate} from "react-router-dom";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import AppBar from "../AppBar/AppBar";

const initialFormState = { email: "", password: "" }

export default () => {
    const [formState, setFormState] = useState(initialFormState)

    const navigate = useNavigate()

    const handleEmailChanged = (value: string) => setFormState({ ...formState, email: value })
    const handlePasswordChanged = (value: string) => setFormState({ ...formState, password: value })

    const handleSubmit = async () => {
        const isSuccess = await login(formState)
        if (isSuccess)
            navigate('/subscription')
    }

    return <Box sx={{ minHeight: "95vh" }}>
        <AppBar title="Логин" isAuth={false} />
        <Stack
            sx={{
                maxWidth: "256px",
                padding: "20px",
                margin: "auto"
            }}
            spacing={2}
        >
            <TextField
                variant="standard"
                defaultValue={formState.email} 
                onChange={(e) => handleEmailChanged(e.target.value)}
                label="Email"
                fullWidth 
            />
            <TextField
                variant="standard"
                type="password"
                defaultValue={formState.password}
                onChange={(e) => handlePasswordChanged(e.target.value)}
                label="Пароль"
                fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>Войти</Button>
        </Stack>
    </Box>
}