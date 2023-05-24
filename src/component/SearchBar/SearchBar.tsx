import { Box, CircularProgress, Divider, List, ListItem, ListItemButton, Stack, TextField } from "@mui/material"

const LoadingBar = () => (<Box sx={{ textAlign: "center" }}>
    <CircularProgress />
</Box>)

type HintProps = {
    key: string,
    value: string,
    onClick: (value: string) => void
}

const Hint = (props: HintProps) => (<ListItem>
    <ListItemButton onClick={() => props.onClick(props.value)}>
        {props.value}
    </ListItemButton>
    <Divider component='div' />
</ListItem>)

type Props = {
    label: string,
    query: string,
    onQueryChanged: (value: string) => void,
    hintState: 'loading' | { id: string, name: string }[],
    onHintClicked: (value: string) => void,
    errorText: string
}

export const SearchBar = (props: Props) => {

    return <Stack>
        <TextField 
            variant="outlined"
            type="search"
            value={props.query}
            onChange={e => props.onQueryChanged(e.target.value)}
            label={props.label}
            error={props.errorText.length > 0}
            helperText={props.errorText}
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
