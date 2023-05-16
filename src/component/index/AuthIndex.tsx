import { Box, Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export const AuthIndex = () => {
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
        <Link to='/order/create'>
            <Button variant='contained'>Оформить подписку</Button>
        </Link>
        <Link to='/order/list'>
            <Button variant="outlined">Мои подписки</Button>
        </Link>
    </Stack>
</Box>
}
