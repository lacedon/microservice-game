import IError from './error-interface';

export default class UnauthorizedError extends Error implements IError {
    public static readonly status: number = 401;
    public readonly status: number = UnauthorizedError.status;

    public get message(): string {
        return 'Authorization has been denied for this request.';
    }
}
