import IUserModel from "./IUserModel";

export default class UserModel implements IUserModel {
    public id?: number;
    public forename?: string;
    public surname?: string;
    public username?: string;
    public email?: string;
}