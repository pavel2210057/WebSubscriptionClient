import AddressInput from "../addressField/AddressInput";
import {Input} from "@mui/material";
import {FormEventHandler, useState} from "react";
import {MenuBook} from "@mui/icons-material";
import MainDrawer from "../mainDrawer/MainDrawer";
import {useAppDispatch} from "../../reducer";
import {subscribe} from "../../action/Subscription";
import {useNavigate} from "react-router-dom";

const initialFormState = {
    name: "",
    surname: "",
    patronymic: "",
    address: { street: "", apartment: "", room: "" },
    duration: 0
}

export default () => {
    const [formState, setFormState] = useState(initialFormState)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [menuOpened, openMenu] = useState(false)

    const handleMenuClicked = () => openMenu(true)
    const handleSurnameChanged = (value: string) => setFormState({...formState, surname: value})
    const handleNameChanged = (value: string) => setFormState({...formState, surname: value})
    const handlePatronymicChanged = (value: string) => setFormState({...formState, surname: value})
    const handleStreetChanged = (value: string) => setFormState({
        ...formState, address: {...formState.address, street: value}
    })
    const handleApartmentChanged = (value: string) => setFormState({
        ...formState, address: {...formState.address, apartment: value}
    })
    const handleRoomChanged = (value: string) => setFormState({
        ...formState, address: {...formState.address, room: value}
    })
    const handleDurationChanged = (value: number) => {
        if (value < 0 && value < formState.duration)
            return
        setFormState({...formState, duration: value})
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        dispatch(subscribe(formState))
            .then(() => navigate('/success'))
    }

    return <div>
        <MenuBook onClick={handleMenuClicked} />
        <form onSubmit={handleSubmit}>
            <Input type='text' placeholder='Фамилия' value={formState.name}
                   onChange={(e) => handleSurnameChanged(e.target.value)} />
            <br />
            <Input type='text' placeholder='Имя' value={formState.surname}
                   onChange={(e) => handleNameChanged(e.target.value)} />
            <br />
            <Input type='text' placeholder='Отчество' value={formState.patronymic}
                   onChange={(e) => handlePatronymicChanged(e.target.value)} />
            <br />
            <AddressInput onChange={(e) => handleStreetChanged(e.target.value)} />
            <br />
            <Input type='text' placeholder='Квартира' value={formState.address.room}
                   onChange={(e) => handleApartmentChanged(e.target.value)} />
            <br />
            <Input type='text' placeholder='Комната' value={formState.address.room}
                   onChange={(e) => handleRoomChanged(e.target.value)} />
            <br />
            <Input type='number' placeholder='Продолжительность' value={formState.duration}
                   onChange={(e) => handleDurationChanged(Number.parseInt(e.target.value))} />
            <br />
            <Input type='submit' />
        </form>
        <MainDrawer isOpen={menuOpened} onClose={() => openMenu(false)} />
    </div>
}
