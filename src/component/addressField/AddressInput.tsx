import {ChangeEventHandler} from "react";
import {Input} from "@mui/material";

type Props = {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export default (props: Props) => {

    return <div>
        <Input type='text' />
    </div>
}
