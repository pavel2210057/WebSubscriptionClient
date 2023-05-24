import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export const Footer = () => {
    return <Box 
        sx={{
            bottom: "0px",
            backgroundColor: "#3d3d3d",
            border: "0px"
        }}
    >
            <Box
                sx={{
                    maxWidth: "1024px",
                    padding: "20px",
                    margin: "auto",
                    color: "white",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                    WebkitFontSmoothing: "antialiased"
                }}
            >
                <p style={{ margin: "0px" }}>© АНО «Редакция газеты «Магнитогорский металл». (2017).</p>
                <p style={{ margin: "0px" }}>Адрес редакции: 455038, г. Магнитогорск, пр. Ленина, д. 124/1, телефон <Link to="tel:+73519396079" style={{ color: "white" }}>+7 (3519) 39-60-79</Link> (Пн - Чт с 8:30 до 17:30, Пт с 8:30 до 16:15)</p>
                <p style={{ margin: "0px" }}>E-mail: it@magmetall.ru</p>
            </Box>
    </Box>
}
