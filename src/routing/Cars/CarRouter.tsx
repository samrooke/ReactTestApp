import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CarRouteConstants from './CarRouteConstants';
import Cars from '../../pages/Cars/Cars';
import Car from '../../pages/Cars/Car';

const CarRouter: React.FC = () => (
    <Switch>
        <Route exact path={CarRouteConstants.Base} component={Cars} />
        <Route exact path={`${CarRouteConstants.Base}${CarRouteConstants.Single}`} component={Car} />
    </Switch>
);

export default CarRouter;