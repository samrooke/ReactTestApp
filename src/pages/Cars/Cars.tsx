import React from 'react';
import { Link } from 'react-router-dom';
import BaseRouteConstants from '../../routing/RouteConstants';
import CarRouteConstants from '../../routing/Cars/CarRouteConstants';

const Cars: React.FC = () => {
    return (
        <div className="cars">
            <h1>Welcome to the cars page</h1>
            <ul>
                {CarList.map(item => (
                    <li key={item.id}>
                        <Link to={`${CarRouteConstants.Base}/${item.id}`}>{item.brand} {item.model}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;

export const CarList = [
    {
        id: "a1",
        brand: "Audi",
        model: "A1",
        price: 18999.99,
    },
    {
        id: "a2",
        brand: "Ford",
        model: "Focus",
        price: 12647.99,
    },
    {
        id: "a3",
        brand: "Ferrari",
        model: "458",
        price: 533350.21,
    }
];