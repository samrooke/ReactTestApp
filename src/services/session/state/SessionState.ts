import ISessionModel from "../../models/session/ISessionModel";
import SessionModel from "../../models/session/SessionModel";
import ISessionAction from "../ISessionAction";
import EnumSessionActionTypes from "../EnumSessionActionTypes";

const SessionReducer = (state: ISessionModel = new SessionModel(), action: ISessionAction): ISessionModel => {
    switch (action.type) {
        case EnumSessionActionTypes.UPDATE:
            return { user: action.state.user };
        case EnumSessionActionTypes.CLEAR:
                return { user: undefined };
    }
}

export default SessionReducer;