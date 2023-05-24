import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getPrice } from "../../action/Subscription"

type Props = {
    duration: string,
    onDurationChanged: (value: string) => void,
    onSubmit: () => void,
    onBack: () => void
}

export const DurationStep = (props: Props) => {
    const [price, setPrice] = useState<'loading' | number>('loading')

    useEffect(() => {
        loadPrice()
    }, [])

    const loadPrice = async () => {
        const price = await getPrice()

        if (price)
            setPrice(price)
    }

    return <Stack spacing={3}>
        <TextField
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 11 - new Date().getMonth() } }}
            value={props.duration}
            onChange={e => props.onDurationChanged(e.target.value)}
            label="Срок подписки (количество месяцев)"
            fullWidth
        />
        {
            Number.parseInt(props.duration) > 0 ?
                <Typography>Стоимость подписки: { 
                    price == 'loading' ? 
                    <CircularProgress size="18px" /> : 
                    Number.parseInt(props.duration) * price
                } ₽</Typography> :
                null
        }
        <Stack direction="row" spacing={5}>
            <Button variant="contained" onClick={props.onSubmit}>Оформить подписку</Button>
            <Button variant="outlined" onClick={props.onBack}>Назад</Button>
        </Stack>
    </Stack>
}
