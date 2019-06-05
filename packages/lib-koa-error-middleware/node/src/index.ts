import { Middleware } from 'koa';
import koaJSONError from 'koa-json-error';
import { IError } from '@gcp-libs/errors';

interface IFormatedError<TPayload = null> {
    status: number;
    message: string;
    payload: TPayload | null;
}

function formatError<TPayload = null>(error: IError<TPayload>): IFormatedError<TPayload> {
    return {
        status: typeof error.status === 'number' ? error.status : 400,
        message:
            typeof error.message === 'string'
                ? error.message
                : 'Something went wrong. Please try later.',
        payload: typeof error.getErrorPayload === 'function' ? error.getErrorPayload() : null,
    };
}

export default function createErrorHandler(): Middleware {
    return koaJSONError({ format: formatError });
}
