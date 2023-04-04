import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Index from "./component/index/Index";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import Subscription from "./component/subscription/Subscription";
import NewspaperList from "./component/newspaperList/NewspaperList";
import SubscriptionSuccess from "./component/subscription/SubscriptionSuccess";
import AuthRoute from "./component/authRoute/AuthRoute";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Index /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/registration' element={ <Registration/> } />
                    <Route path='/subscription' element={ <AuthRoute> <Subscription /> </AuthRoute> } />
                    <Route path='/success' element={ <AuthRoute> <SubscriptionSuccess /> </AuthRoute> } />
                    <Route path='/newspaper-list' element={ <AuthRoute> <NewspaperList /> </AuthRoute> } />
                    <Route path='*' element={ <Navigate to='/' /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
