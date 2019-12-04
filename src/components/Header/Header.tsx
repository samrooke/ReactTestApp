import React, { Dispatch } from 'react';
import { useSessionState } from '../../services/session/context/SessionContext';
import EnumSessionActionTypes from '../../services/session/EnumSessionActionTypes';
import { useBasketState } from '../../services/basket/context/BasketContext';
import IBasketItemModel from '../../services/models/basket/item/IBasketItemModel';
import { Link } from 'react-router-dom';
import BaseRouteConstants from '../../routing/RouteConstants';

export const Header: React.FC = () => {
    const { sessionState, dispatch } = useSessionState();
    const [ basketState ] = useBasketState() as any;

    return (
        <div className="header">
            <Link to={BaseRouteConstants.Home}><h1>React Test App</h1></Link>
            <div>
                {basketState.items.length > 0 && (
                    <div>
                        {basketState.items.reduce((a: number, b: IBasketItemModel) => a + b.quantity, 0)} items ({basketState.total.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })})
                    </div>
                )}
                {sessionState.user && (
                    <div>
                        {sessionState.user.forename}
                        <button onClick={() => dispatch({ type: EnumSessionActionTypes.CLEAR, state: { user: undefined } })}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Header;