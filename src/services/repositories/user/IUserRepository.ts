import IUserModel from "../../models/user/IUserModel";
import IApiResponse from "../../BaseApiService/IApiResponse";

export default interface IUserRepository {
    login: (username: string, password: string) => Promise<IUserModel>;
}