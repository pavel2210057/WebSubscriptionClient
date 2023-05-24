import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
    palette: {
        // primary: {
        //     // main: "#dedede"
        // }
    },
    typography: {
        h1: {
            color: "#3d3d3d",
            letterSpacing: 0
        },
        allVariants: {
            fontFamily: "Roboto, sans-serif",
            WebkitFontSmoothing: "antialiased"
        }
    }
})
