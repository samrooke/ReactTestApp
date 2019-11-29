import ISessionModel from "./ISessionModel";
import IUserModel from "../user/IUserModel";

export default class SessionModel implements ISessionModel {
    public user?: IUserModel;
}