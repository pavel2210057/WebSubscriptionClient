import { Box, Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export const UnauthIndex = () => {
    return <Box
        sx={{
            display: "table-cell",
            width: "100vw",
            height: "100vh",
            verticalAlign: "middle",
            textAlign: "center"
        }}
    >
        <Stack spacing={5}>
            <Link to='/login'>
                <Button variant='contained'>Вход в личный кабинет</Button>
            </Link>
            <Link to='/registration'>
                <Button variant="outlined">Регистрация</Button>
            </Link>
        </Stack>
    </Box>
}
