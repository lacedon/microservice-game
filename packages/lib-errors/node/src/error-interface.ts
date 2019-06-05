interface IError {
    status?: number;
    message?: string;
}

interface IError<TPayload = null> {
    status?: number;
    message?: string;
    getErrorPayload?: () => TPayload | null;
}

export default IError;
