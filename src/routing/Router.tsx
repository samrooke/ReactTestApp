import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import RouteConstants from './RouteConstants';
import { SessionStateProvider, useSessionState } from '../services/session/context/SessionContext';
import SessionReducer from '../services/session/state/SessionState';
import SessionModel from '../services/models/session/SessionModel';
import Header from '../components/Header/Header';

const Router: React.FC = () => (
    <SessionStateProvider reducer={SessionReducer} initialState={new SessionModel()}>
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <PrivateRoute path={RouteConstants.Dashboard} exact component={Dashboard} />
            <PublicOnlyRoute path={RouteConstants.Login} exact component={Login} />
        </BrowserRouter>
    </SessionStateProvider>
);

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

export default Router;