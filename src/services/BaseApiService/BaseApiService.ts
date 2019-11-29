import IBaseApiService from "./IBaseApiService";
import apiConfig from '../config';

export default class BaseApiService<T> implements IBaseApiService<T> {
    public fetchData = (endpoint: string, method: string, payload: any = {}) => {
        return new Promise<T>(async (resolve, reject) => {
            await fetch(`${apiConfig.baseUrl}${endpoint}`, {
                method,
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async (response: Response) => {
                    const result: T = await response.json();
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    };
}