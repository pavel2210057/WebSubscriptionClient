import { Button, Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    icon: ReactNode,
    title: string,
    onClick?: () => void
}

export const DrawerButton = (props: Props) => {
    return <Button
        variant="text"
        sx={{
            width: "300px",
            height: "48px",
            justifyContent: "left",
            paddingLeft: "16px",
            textTransform: "none"
        }}
        onClick={props.onClick}
    >
        {props.icon}
        <Typography
            sx={{
                position: "relative",
                paddingLeft: "32px"
            }}
        >{props.title}</Typography>
    </Button>
}
