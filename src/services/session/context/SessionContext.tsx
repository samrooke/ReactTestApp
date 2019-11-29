import React, { createContext, useContext, useReducer } from 'react';
import ISessionModel from '../../models/session/ISessionModel';

export const SessionContext = createContext({});

interface ISessionStateProvider {
    reducer: any;
    initialState: ISessionModel;
    children: React.ReactNode;
}

export const SessionStateProvider = ({ reducer, initialState, children }: ISessionStateProvider) => (
    <SessionContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SessionContext.Provider>
);

export const useSessionState = () => useContext(SessionContext);