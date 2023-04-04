import {FormEventHandler, useState} from "react";
import {useAppDispatch} from "../../reducer";
import {login} from "../../action/Login";
import {useNavigate} from "react-router-dom";

const initialFormState = { email: "", password: "" }

export default () => {
    const [formState, setFormState] = useState(initialFormState)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleEmailChanged = (value: string) => setFormState({ ...formState, email: value })
    const handlePasswordChanged = (value: string) => setFormState({ ...formState, password: value })

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        const isSuccess = await dispatch(login(formState))
        if (isSuccess)
            navigate('/subscription')
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={formState.email} onChange={(e) => handleEmailChanged(e.target.value)}
               placeholder="Email" />
        <br />
        <input type="text" value={formState.password} onChange={(e) => handlePasswordChanged(e.target.value)}
               placeholder="Пароль" />
        <br />
        <input type="submit" value="Войти" />
    </form>
}