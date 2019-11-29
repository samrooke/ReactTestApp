export default interface IBaseApiService<T> {
    fetchData: (endpoint: string, method: string, payload: any) => Promise<T>;
}