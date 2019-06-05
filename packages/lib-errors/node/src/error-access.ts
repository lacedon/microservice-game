import IError from './error-interface';

export default class AccessError extends Error implements IError {
    public static readonly status: number = 403;
    public readonly status: number = AccessError.status;

    public get message(): string {
        return "You don't have permission to access.";
    }
}
