import IError from './error-interface';

export default class NotImplementedError extends Error implements IError {
    public static readonly status: number = 501;
    public readonly status: number = NotImplementedError.status;

    public get message(): string {
        return 'Method is not implemented yet.';
    }
}
