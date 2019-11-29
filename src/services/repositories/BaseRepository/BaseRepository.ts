import BaseApiService from "../../BaseApiService/BaseApiService";
import IBaseRepository from "./IBaseRepository";

export default class BaseRepository<T> implements IBaseRepository<T> {
    public async get(endpoint: string): Promise<T> {
        const apiService = new BaseApiService<T>();

        return await apiService.fetchData(endpoint, 'GET');
    }

    public async post(endpoint: string, payload: any): Promise<T> {
        const apiService = new BaseApiService<T>();

        return await apiService.fetchData(endpoint, 'POST', payload);
    }

    public async put(endpoint: string, payload: any): Promise<T> {
        const apiService = new BaseApiService<T>();

        return await apiService.fetchData(endpoint, 'PUT', payload);
    }
}