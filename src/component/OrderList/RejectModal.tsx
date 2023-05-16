import { Button, Modal, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

type Props = {
    open: boolean,
    onClose: () => void,
    onReject: (message: string) => void
}

export const RejectModal = (props: Props) => {
    const [message, setMessage] = useState('')

    const onSubmitRejectClick = () => {
        props.onReject(message)
    }

    return <Modal 
        open={props.open} 
        onClose={() => props.onClose()}
        sx={{
            display: "table-cell",
            textAlign: "center",
            verticalAlign: "medium"
        }}
    >
        <Stack
            sx={{
                position: "absolute",
                width: "512px",
                background: "#FFF",
                padding: "25px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
            spacing={5}
        >
            <Typography variant="h6">Опишите проблему</Typography>
            <TextField
                variant="outlined"
                value={message}
                onChange={e => setMessage(e.target.value)}
                label="Укажите причину отказа"
                multiline
                maxRows={5}
            />
            <Stack direction="row-reverse" spacing={1}>
                <Button variant="contained" color="error" onClick={onSubmitRejectClick}>Отклонить заявку</Button>
                <Button variant="outlined" onClick={props.onClose}>Отмена</Button>
            </Stack>
        </Stack>
    </Modal>
}
