export interface IResponse<T = any> {
    success: boolean;
    status?: number;
    errors?: string[];
    data: T;
}