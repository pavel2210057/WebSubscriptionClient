import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Index from "./component/index/Index";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Subscription from "./component/Subscription/Subscription";
import AuthRoute from "./component/AuthRoute/AuthRoute";
import { ThemeProvider } from '@mui/material';
import { AppTheme } from './Theme';
import { SubscriptionList } from './component/SubscriptionList/SubscriptionList';
import { OrderList } from './component/OrderList/OrderList';
import { Footer } from './component/Footer/Footer';

function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Index /> } />
                    <Route path='/login' element={ <AuthRoute authRoute={false}><Login /></AuthRoute> } />
                    <Route path='/registration' element={ <AuthRoute authRoute={false}><Registration/></AuthRoute> } />
                    <Route path='/order/create' element={ <AuthRoute authRoute> <Subscription /> </AuthRoute> } />
                    <Route path='/order/list' element={ <AuthRoute authRoute> <SubscriptionList /> </AuthRoute> } />
                    <Route path='/private/order/list' element={ <AuthRoute authRoute> <OrderList /> </AuthRoute> } />
                    <Route path='*' element={ <Navigate to='/' /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
