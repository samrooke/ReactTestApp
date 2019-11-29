export default interface IBaseRepository<T> {
    get: (endpoint: string) => Promise<T>;
    post: (endpoint: string, payload: any) => Promise<T>;
    put: (endpoint: string, payload: any) => Promise<T>;
}