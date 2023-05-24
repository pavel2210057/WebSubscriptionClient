import { Box, Button, Stack, Typography } from "@mui/material"
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
    <Stack 
        sx={{
            marginTop: "5%"
        }}
        spacing={3}
    >
        <Typography sx={{
            color: "#3d3d3d", 
            zIndex: "100"
        }} component="h2">Электронный сервис подписки на газету<br/>«Магнитогорский металл».</Typography>
        <Link to='/order/create'>
            <Button variant='contained'>Оформить подписку</Button>
        </Link>
        <Link to='/order/list'>
            <Button variant="outlined">Мои подписки</Button>
        </Link>
    </Stack>
</Box>
}
