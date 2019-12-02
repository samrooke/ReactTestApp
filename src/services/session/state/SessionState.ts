import ISessionModel from "../../models/session/ISessionModel";
import SessionModel from "../../models/session/SessionModel";
import ISessionAction from "../ISessionAction";
import EnumSessionActionTypes from "../EnumSessionActionTypes";

const SessionReducer = (state: ISessionModel = new SessionModel(), action: ISessionAction): ISessionModel => {
    switch (action.type) {
        case EnumSessionActionTypes.UPDATE:
            sessionStorage.setItem("user", JSON.stringify(action.state.user));
            return { user: action.state.user };
        case EnumSessionActionTypes.CLEAR:
                sessionStorage.clear();
                return { user: undefined };
    }
}

export default SessionReducer;