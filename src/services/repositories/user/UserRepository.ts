import BaseRepository from "../BaseRepository/BaseRepository";
import IUserRepository from "./IUserRepository";
import UserModel from "../../models/user/UserModel";
import IUserModel from "../../models/user/IUserModel";
import UserEndpoints from "./UserEndpoints";

export default class UserRepository extends BaseRepository<UserModel> implements IUserRepository {
    public login = async (username: string, password: string): Promise<IUserModel> => {
        return await this.post(UserEndpoints.Login, { username, password });
    }
}