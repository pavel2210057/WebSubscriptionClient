import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import UnauthDrawer from "../AppDrawer/UnauthDrawer"
import { useState } from "react"
import AuthDrawer from "../AppDrawer/AuthDrawer"

type Props = {
    title: string,
    isAuth: boolean
}

export default (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return <Box>
        <AppBar position="static" elevation={0} sx={{ width: "100%", height: 72, backgroundColor: "#dedede" }}>
            <Toolbar 
                sx={{
                    maxWidth: 1024,
                    width: "100%",
                    textAlign: "left",
                    margin: "auto",
                    padding: 0
                }}
            >
                <IconButton 
                    sx={{ 
                        width: 72, 
                        height: 72
                    }} 
                    edge="start" 
                    onClick={() => setIsOpen(true)}
                >
                    <img src="https://kiosk.magmetall.ru/svg/menu.svg" width="25" height="25" />
                </IconButton>
                <Typography
                    sx={{
                        fontSize: "25px"
                    }}
                    variant="h1"
                >
                    {props.title}
                </Typography>
                {
                    props.isAuth ? 
                        <AuthDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} /> : 
                        <UnauthDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
                }
            </Toolbar>
        </AppBar>
    </Box>
}
