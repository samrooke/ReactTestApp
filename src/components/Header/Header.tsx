import React, { Dispatch } from 'react';
import { useSessionState } from '../../services/session/context/SessionContext';
import ISessionModel from '../../services/models/session/ISessionModel';
import ISessionAction from '../../services/session/ISessionAction';
import EnumSessionActionTypes from '../../services/session/EnumSessionActionTypes';

export const Header: React.FC = () => {
    const [ sessionState, dispatch ] = useSessionState() as any;

    return (
        <div className="header">
            <h1>React Test App</h1>
            {sessionState.user && (
                <React.Fragment>
                    {sessionState.user.forename}
                    <button onClick={() => dispatch({ type: EnumSessionActionTypes.CLEAR, state: { user: undefined } })}>Clear session</button>
                </React.Fragment>
            )}
        </div>
    )
};

export default Header;