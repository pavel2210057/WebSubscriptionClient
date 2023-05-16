import {FormEventHandler, useState} from "react";
import {login} from "../../action/Login";
import {useNavigate} from "react-router-dom";
import { Box, Button, Grid, TextField } from "@mui/material";
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

    return <Box>
        <AppBar title="Логин" isAuth={false} />
        <Grid 
            container 
            sx={{
                justifyContent: "center",
                paddingTop: "20px"
            }}
        >
            <Grid container item spacing={3} xs={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="standard"
                        defaultValue={formState.email} 
                        onChange={(e) => handleEmailChanged(e.target.value)}
                        label="Email"
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="standard"
                        type="password"
                        defaultValue={formState.password}
                        onChange={(e) => handlePasswordChanged(e.target.value)}
                        label="Пароль"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit}>Войти</Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}