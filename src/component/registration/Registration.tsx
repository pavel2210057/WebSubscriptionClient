import {FormEventHandler, useState} from "react";
import {register} from "../../action/Login";
import {useAppDispatch} from "../../reducer";
import {useNavigate} from "react-router-dom";

const initialFormState = {
    username: "",
    email: "",
    password: "",
    repeatedPassword: ""
}

export default () => {
    const [formState, setFormState] = useState(initialFormState)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleUsernameChanged = (value: string) => setFormState({ ...formState, username: value })
    const handleEmailChanged = (value: string) => setFormState({ ...formState, email: value })
    const handlePasswordChanged = (value: string) => setFormState({ ...formState, password: value })
    const handleRepeatedPasswordChanged = (value: string) => setFormState({ ...formState, repeatedPassword: value })

    const validateForm = (state: typeof formState) => state.username.length == 0

    const onSubmit: FormEventHandler = async (event) => {
        event.preventDefault()
        const isSuccess = await dispatch(register(formState))
        if (isSuccess)
            navigate('/login')
    }

    return <form onSubmit={onSubmit} onChange={() => console.log("Changed")}>
        <input type='text' value={formState.username} onChange={(e) => handleUsernameChanged(e.target.value)}
               placeholder='Имя пользователя'/>
        {
            formState.username.length == 0 ? <p>Пустое имя пользователя!</p> : null
        }
            <br />
        <input type='text' value={formState.email} onChange={(e) => handleEmailChanged(e.target.value)}
               placeholder='Email'/>
        {
            formState.email.length == 0 ? <p>Пустой Email!</p> : null
        }
            <br />
        <input type='text' value={formState.password} onChange={(e) => handlePasswordChanged(e.target.value)}
               placeholder='Пароль'/>
        {
            formState.password.length == 0 ? <p>Пустой пароль!</p> : null
        }
            <br />
        <input type='text' value={formState.repeatedPassword} onChange={(e) => handleRepeatedPasswordChanged(e.target.value)}
               placeholder='Повторите пароль'/>
        {
            formState.password != formState.repeatedPassword ? <p>Пароли не совпадают!</p> : null
        }
            <br />
        <input type='submit' value='Регистрация' disabled={validateForm(formState)}/>
    </form>
}
