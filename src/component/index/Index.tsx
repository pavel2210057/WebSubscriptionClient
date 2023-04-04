import {Link} from "react-router-dom";

export default () => {
    return (
        <div>
            <Link to='/login'>Вход в личный кабинет</Link>
            <br />
            <Link to='/registration'>Регистрация</Link>
        </div>
    )
}
