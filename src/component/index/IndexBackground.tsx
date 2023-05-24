import { Box, useMediaQuery } from "@mui/material";
import { CSSProperties } from "react";

const landingCss: CSSProperties = {
    position: "absolute",
    overflow: "hidden"
}

type Props = {
    onDownArrowClicked: () => void
}

export const IndexBackground = (props: Props) => {
    const landing1MediaQuery = useMediaQuery('(max-height: 480px)')
    const landing2MediaQuery = useMediaQuery('(max-width: 800px)')

    return <Box sx={{ position: "absolute", width: "100vw", height: "100vh", backgroundColor: "#f2f2f2" }}>
        <img src="https://kiosk.magmetall.ru/img/landing_head_01.png" 
            style={landing1MediaQuery ? {
                display: "none"
            } : {
                ...landingCss,
                width: "500px",
                left: "0",
                top: "0"
            }}
        />
        <img src="https://kiosk.magmetall.ru/img/landing_head_02.png" 
            style={landing2MediaQuery ? {
                display: "none"
            } : {
                ...landingCss,
                width: "500px",
                right: "0",
                top: "0"
            }}
        />
        <div style={{ 
            position: "absolute", 
            width: "100%", 
            maxWidth: "100%",
            top: "30%", 
            left: "-50%", 
            textAlign: "right",
            verticalAlign: "top"
        }}>
            <img src="https://kiosk.magmetall.ru/img/landing_head_03.png" 
                style={{
                    overflow: "hidden",
                    width: "300px",
                    marginRight: "20%"
                }}
            />
        </div>
        <div style={{
            position: "absolute", 
            width: "100%", 
            maxWidth: "100%",
            top: "30%", 
            right: "-50%",
            textAlign: "left",
            verticalAlign: "top"
        }}>
        <img src="https://kiosk.magmetall.ru/img/landing_head_04.png" 
            style={{
                overflow: "hidden",
                width: "300px",
                marginLeft: "20%"
            }} />
        </div>
        <img src="https://kiosk.magmetall.ru/svg/arrow_d.svg"
            style={{
                position: "absolute",
                width: "50px",
                left: "50%",
                bottom: "0px",
                marginBottom: "10px",
                transform: "translate(-50%, -50%)",
                cursor: "pointer"
            }}
            onClick={props.onDownArrowClicked} />
    </Box>
}