import { Box, CircularProgress, Divider, List, ListItem, ListItemButton, Stack, TextField } from "@mui/material"
import { useEffect } from "react"

const LoadingBar = () => (<Box sx={{ textAlign: "center" }}>
    <CircularProgress />
</Box>)

type HintProps = {
    key: string,
    value: string,
    onClick: (value: string) => void
}

const Hint = (props: HintProps) => (<ListItem key={props.key}>
    <ListItemButton onClick={() => props.onClick(props.value)}>
        {props.value}
    </ListItemButton>
    <Divider component='li' />
</ListItem>)

type Props = {
    label: string,
    query: string,
    onQueryChanged: (value: string) => void,
    hintState: 'loading' | { id: string, name: string }[],
    onHintClicked: (value: string) => void
}

export const SearchBar = (props: Props) => {

    useEffect(() => {
        console.log(props.query)
    }, [ props.query ])

    return <Stack>
        <TextField 
            variant="outlined"
            type="search"
            value={props.query}
            onChange={e => props.onQueryChanged(e.target.value)}
            label={props.label}
            fullWidth
        />
        <List sx={{
            backgroundColor: '#FFF',
            width: "100%"
        }}>
            {
                props.hintState == 'loading' ?
                    <LoadingBar /> :
                    props.hintState.map(hint => <Hint key={hint.id} value={hint.name} onClick={props.onHintClicked} />)
            }
        </List>
    </Stack>
}
