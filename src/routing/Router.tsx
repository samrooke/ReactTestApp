import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import RouteConstants from './RouteConstants';
import { SessionStateProvider, useSessionState } from '../services/session/context/SessionContext';
import SessionReducer from '../services/session/state/SessionState';
import SessionModel from '../services/models/session/SessionModel';
import CarRouter from './Cars/CarRouter';
import Layout from '../components/Layout/Layout';
import IUserModel from '../services/models/user/IUserModel';
import { BasketStateProvider } from '../services/basket/context/BasketContext';
import BasketReducer from '../services/basket/state/BasketState';
import BasketModel from '../services/models/basket/BasketModel';

const Router: React.FC = () => {
    let currentSession = new SessionModel();
    const user: IUserModel | undefined = getUser();

    currentSession.user = user;

    return (    
        <SessionStateProvider reducer={SessionReducer} initialState={currentSession}>
            <BasketStateProvider reducer={BasketReducer} initialState={new BasketModel()}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path={RouteConstants.Home} component={Home} />
                            <PrivateRoute exact path={RouteConstants.Dashboard} component={Dashboard} />
                            <PublicOnlyRoute exact path={RouteConstants.Login} component={Login} />
                            <CarRouter />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </BasketStateProvider>
        </SessionStateProvider>
    );
};

export const PrivateRoute = ({ component: Component, ...rest}: any) => {
    const [ sessionState ] = useSessionState() as any;
    
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!sessionState.user) {
                    return (
                        <Redirect
                            to={{
                                pathname: RouteConstants.Login,
                                state: { from: props.location }
                            }}
                        />
                    );
                }

                return <Component {...props} />
            }}
        />
    );
};

export const PublicOnlyRoute = ({ component: Component, ...rest}: any) => {
    const [ sessionState ] = useSessionState() as any;

    return (
        <Route
            {...rest}
            render={(props) => {
                if (sessionState.user) {
                    return (
                        <Redirect
                            to={{
                                pathname: RouteConstants.Dashboard,
                                state: { from: props.location }
                            }}
                        />
                    );
                }

                return <Component {...props} />
            }}
        />
    );
};

const getUser = (): IUserModel | undefined => {
    let user: string | null | undefined | IUserModel = sessionStorage.getItem("user");

    if (user) {
        try {
            user = JSON.parse(user) as IUserModel;
        }
        catch { 
            user = undefined;
        }
    } else {
        user = undefined;
    }

    return user;
}

export default Router;