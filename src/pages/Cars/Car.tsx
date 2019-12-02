import React from 'react';
import IRouteParamFunctionComponent from '../../generic/IRouteParamFunctionComponent';
import { CarList } from './Cars';

const Car: IRouteParamFunctionComponent = ({ match }) => {
    const car = CarList.find(i => i.id === match.params.id);

    if (!car) {
        return <div>Couldn't find car.</div>
    }

    return (
        <div className="product">
            {car.brand} {car.model}
            <hr />
            {car.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
        </div>
    );
}

export default Car;