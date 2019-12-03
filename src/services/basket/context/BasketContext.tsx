import React, { createContext, useContext, useReducer } from 'react';
import IBasketModel from '../../models/basket/IBasketModel';
import IStateProvider from '../../generic/interfaces/IStateProvider';

export const BasketContext = createContext({});

export const BasketStateProvider = ({ reducer, initialState, children }: IStateProvider<IBasketModel>) => (
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </BasketContext.Provider>
);

export const useBasketState = () => useContext(BasketContext);