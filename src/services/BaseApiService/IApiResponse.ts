export default interface IApiResponse<T> {
    entity?: T;
    success?: boolean;
    errorMessage?: string;
    hasValidationMessages?: boolean;
    validationMessages: Array<string>;
}