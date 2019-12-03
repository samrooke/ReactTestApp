import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarRouteConstants from '../../routing/Cars/CarRouteConstants';
import { useBasketState } from '../../services/basket/context/BasketContext';
import EnumBasketActionTypes from '../../services/basket/EnumBasketActionTypes';
import IBasketItemModel from '../../services/models/basket/item/IBasketItemModel';

const Cars: React.FC = () => {
    const [ basketState, dispatch ] = useBasketState() as any;

    return (
        <div className="cars">
            <h1>Welcome to the cars page</h1>
            <ul>
                {CarList.map(item => {
                    const index = basketState.items.findIndex((i: IBasketItemModel) => i.item.id === item.id);

                    return (
                        <li key={item.id}>
                            <div className="card">
                                <Link to={`${CarRouteConstants.Base}/${item.id}`}>{item.brand} {item.model}</Link>
                                <div className="add-to-buttons">
                                    {index === -1 ? (
                                        <button onClick={() => dispatch({ type: EnumBasketActionTypes.ADD, state: { item, quantity: 1 } })}>Add to basket</button>
                                    ) : (
                                        <div className="">
                                            <button onClick={() => dispatch({ type: EnumBasketActionTypes.UPDATE, state: { item, quantity: basketState.items[index].quantity - 1 } })}>-</button>
                                            <p>{basketState.items[index].quantity}</p>
                                            <button onClick={() => dispatch({ type: EnumBasketActionTypes.UPDATE, state: { item, quantity: basketState.items[index].quantity + 1 } })}>+</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

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
    },
    {
        id: "a4",
        brand: "Volkswagen",
        model: "Polo",
        price: 24000.00,
    }
];