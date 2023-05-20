import { Box } from "@mui/material";

type Props = {
    paymentUrl: string
}

export const RobokassaForm = (props: Props) => <Box
    sx={{
        width: "242px",
        height: "55px",
    }}
>
    <iframe
        style={{
            width: "242px",
            height: "55px",
            border: 0,
            overflow: "hidden",
            backgroundColor: "transparent"
        }}
        allowTransparency={true}
        src={props.paymentUrl}
    />
</Box>
