import React, { createContext, useContext, useReducer } from 'react';
import ISessionModel from '../../models/session/ISessionModel';
import IStateProvider from '../../generic/interfaces/IStateProvider';

export const SessionContext = createContext({});

export const SessionStateProvider = ({ reducer, initialState, children }: IStateProvider<ISessionModel>) => (
    <SessionContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SessionContext.Provider>
);

export const useSessionState = () => useContext(SessionContext);