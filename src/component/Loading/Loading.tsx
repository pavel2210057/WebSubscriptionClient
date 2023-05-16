import { Box, CircularProgress } from "@mui/material";

export const Loading = () => (<Box sx={{ width: "100%", height: "100%" }}>
    <CircularProgress sx={{ position: "absolute", verticalAlign: "middle", margin: "auto" }} />
</Box>)
