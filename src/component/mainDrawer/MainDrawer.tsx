import {Drawer, TextField} from "@mui/material";

type Props = {
    isOpen: boolean,
    onClose: () => void
}

export default (props: Props) => {
    return <Drawer open={props.isOpen} onClose={props.onClose}>
        <TextField value='Подписка' />
        <TextField value='Выпуски газет' />
    </Drawer>
}
