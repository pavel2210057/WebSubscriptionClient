import { Box, Step, StepContent, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import { NameStep } from "./NameStep"
import { AddressStep } from "./AddressStep"
import { DurationStep } from "./DurationStep"
import AppBar from "../AppBar/AppBar"
import { postOrder } from "../../action/Subscription"
import { useNavigate } from "react-router-dom"

const initialFormState = {
    name: "",
    surname: "",
    patronymic: "",
    address: { street: "", apartment: "", room: "" },
    duration: 0
}

export default () => {
    const [step, setStep] = useState(0)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [patronymic, setPatronymic] = useState("")

    const [address, setAddress] = useState("")
    const [apartment, setApartment] = useState("")
    const [room, setRoom] = useState("")

    const [duration, setDuration] = useState("")

    const navigate = useNavigate()

    const onBackPressed = () => {
        if (step > 0)
            setStep(step - 1)
    }

    const onNextStepPressed = () => {
        if (step < 2)
            setStep(step + 1)
    }

    const onSubmitPressed = async () => {
        const isSuccess = await postOrder(firstName, lastName, patronymic, address, apartment, room, duration)
        if (isSuccess)
            navigate('/order/list')
    }

    return <Box>
        <AppBar title="Подписка" isAuth />
        <Box 
            sx={{
                paddingTop: "20px",
                width: "100%",
                maxWidth: "1024px",
                margin: "auto",
                textAlign: "left"
            }}
        >
            <Stepper activeStep={step} orientation="vertical">
                <Step>
                    <StepLabel>Укажите ФИО</StepLabel>
                    <StepContent>
                        <NameStep
                            firstName={firstName} onFirstNameChanged={setFirstName}
                            lastName={lastName} onLastNameChanged={setLastName}
                            patronymic={patronymic} onPatronymicChanged={setPatronymic}
                            onSubmit={onNextStepPressed}
                        />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Укажите адрес</StepLabel>
                    <StepContent>
                        <AddressStep 
                            address={address} onAddressChanged={setAddress}
                            apartment={apartment} onApartmentChanged={setApartment}
                            room={room} onRoomChanged={setRoom}
                            onSubmit={onNextStepPressed} onBack={onBackPressed}
                        />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Укажите срок подписки</StepLabel>
                    <StepContent>
                        <DurationStep
                            duration={duration} onDurationChanged={setDuration}
                            onSubmit={onSubmitPressed} onBack={onBackPressed}
                        />
                    </StepContent>
                </Step>
            </Stepper>
        </Box>
    </Box>
}
