import {Drawer} from "@mui/material";
import { Link } from "react-router-dom";
import { DrawerButton } from "./DrawerButton";

type Props = {
    isOpen: boolean,
    onClose: () => void
}

export default (props: Props) => {
    return <Drawer open={props.isOpen} onClose={props.onClose}>
        <Link to='/'>
            <DrawerButton icon="" title="Главная" />
        </Link>
        <Link to="/registration">
            <DrawerButton icon="" title="Регистрация" />
        </Link> 
        <Link to="/login">
            <DrawerButton icon="" title="Вход" />
        </Link>
    </Drawer>
}
