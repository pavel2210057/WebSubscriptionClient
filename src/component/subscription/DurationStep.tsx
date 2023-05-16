import { Box, Button, Stack, TextField } from "@mui/material"

type Props = {
    duration: string,
    onDurationChanged: (value: string) => void,
    onSubmit: () => void,
    onBack: () => void
}

export const DurationStep = (props: Props) => {
    return <Stack spacing={3}>
        <TextField
            variant="outlined"
            type="number"
            value={props.duration}
            onChange={e => props.onDurationChanged(e.target.value)}
            label="Срок подписки (количество месяцев)"
            fullWidth
        />
        <Stack direction="row" spacing={5}>
            <Button variant="contained" onClick={props.onSubmit}>Оформить подписку</Button>
            <Button variant="outlined" onClick={props.onBack}>Назад</Button>
        </Stack>
    </Stack>
}
