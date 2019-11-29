import EnumSessionActionTypes from "./EnumSessionActionTypes";
import ISessionModel from "../models/session/ISessionModel";

export default interface ISessionAction {
    type: EnumSessionActionTypes;
    state: ISessionModel;
}