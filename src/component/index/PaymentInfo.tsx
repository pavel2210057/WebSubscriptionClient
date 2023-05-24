import { Box, Typography } from "@mui/material";
import { CSSProperties, forwardRef } from "react";
import { Link } from "react-router-dom";

const infoCss: CSSProperties = {
    marginTop: "10px",
    marginBottom: "15px",
    color: "#3d3d3d"
}

const logoCss: CSSProperties = {
    boxSizing: "border-box",
    display: "inline-block",
    width: "25%",
    padding: "10px",
    verticalAlign: "middle"
}

export const PaymentInfo = forwardRef<HTMLDivElement>((_, ref) => <Box 
    sx={{ 
        backgroundColor: "white",
        padding: "80px 20px 80px 20px"
    }}
    ref={ref}>
    <Box sx={{ maxWidth: "1024px", width: "100%", margin: "auto" }}>
        <Typography component="h2" sx={{ marginTop: "10px", marginBottom: "10px", fontSize: "45px" }}>Оплата</Typography>
        <Typography component="p" sx={infoCss}>
            Оплата заказов осуществляется через платежный сервис <Link to="https://www.robokassa.ru/">ROBOKASSA</Link>. Для проведения оплаты нет необходимости специально посещать сайт ROBOKASSA или регистрироваться в ней. Наш сервис сам сформирует электронный счет и перенаправит вас на нужную страницу платежной системы
        </Typography>
        <Box sx={{ width: "100%" }}>
            <Box sx={logoCss}>
                <img src="https://kiosk.magmetall.ru/svg/logo_visa.svg" style={{ width: "80%" }}/>
            </Box>
            <Box sx={logoCss}>
                <img src="https://kiosk.magmetall.ru/svg/logo_mastercard.svg" style={{ width: "80%" }}/>
            </Box>
            <Box sx={logoCss}>
                <img src="https://kiosk.magmetall.ru/svg/logo_mir.svg" style={{ width: "80%" }}/>
            </Box>
            <Box sx={logoCss}>
                <img src="https://kiosk.magmetall.ru/svg/logo_applepay.svg" style={{ width: "80%" }}/>
            </Box>
        </Box>
        <Typography sx={infoCss}>Мы принимаем к оплате: банковские карты VISA, MASTERCARD, МИР; ApplePay; перечисления через интернет-банки Альфа-Клик, Сбербанк, Тинькофф, Банк Русский Стандарт, ВТБ24, Кредит Урал Банк и многие другие.</Typography>
        <Typography sx={infoCss}>Ознакомиться с договором публичной оферты вы можете по <Link to="http://localhost:3001/static/oferta.docx">ссылке</Link></Typography>
    </Box>
</Box>
)