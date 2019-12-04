import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import ISessionModel from '../../models/session/ISessionModel';
import IStateProvider from '../../generic/interfaces/IStateProvider';
import ISessionAction from '../ISessionAction';

export const SessionContext = createContext({});

export const SessionStateProvider = ({ reducer, initialState, children }: IStateProvider<ISessionModel>) => (
    <SessionContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SessionContext.Provider>
);

interface ISessionContext {
    sessionState: ISessionModel;
    dispatch: Dispatch<ISessionAction>;
}

export const useSessionState = (): ISessionContext => {
    const [ sessionState, dispatch ] = useContext(SessionContext) as any;

    return { sessionState, dispatch };
};