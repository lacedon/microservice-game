import IError from './error-interface';

export type TErrorList = string[];

export type TPayload = {
    fieldErrors: { [fieldName: string]: TErrorList };
    globalErrors: TErrorList;
};

export default class FormError extends Error implements IError<TPayload> {
    public static readonly status: number = 400;
    public readonly status: number = FormError.status;

    public fieldErrors: { [fieldName: string]: TErrorList };
    public globalErrors: TErrorList;

    public constructor(payload: {
        fieldErrors?: { [fieldName: string]: TErrorList };
        globalErrors?: TErrorList;
    }) {
        super();

        this.fieldErrors = payload.fieldErrors || {};
        this.globalErrors = payload.globalErrors || [];
    }

    public get message(): string {
        if (this.globalErrors.length === 1) {
            return this.globalErrors[0];
        }
        if (Object.keys(this.fieldErrors)) {
            return 'There are errors in fields';
        }
        return 'Something went wrong. Please try later.';
    }

    public getErrorPayload(): TPayload {
        return { fieldErrors: this.fieldErrors, globalErrors: this.globalErrors };
    }
}
