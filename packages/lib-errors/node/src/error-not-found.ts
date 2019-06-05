import IError from './error-interface';

export default class NotFoundError extends Error implements IError {
    public static readonly status: number = 404;
    public readonly status: number = NotFoundError.status;

    public get message(): string {
        return "Wasn't fround.";
    }
}
