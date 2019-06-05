import { TPayload, promisifiedJWTSign, promisifiedJWTVerify } from './tools';

interface IOptions {
    privateKey: string | Buffer;
}

export default function createTokenGenerator({
    privateKey,
}: IOptions): {
    generateToken(payload: TPayload): Promise<string>;
    getValueFromToken<TResult extends TPayload>(token: string): TResult;
    verifyToken(token: string): Promise<boolean>;
} {
    function generateToken(payload: TPayload): Promise<string> {
        return promisifiedJWTSign(payload, privateKey);
    }

    function getValueFromToken<TResult extends TPayload>(token: string): TResult {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return promisifiedJWTVerify(token, privateKey) as any;
    }

    async function verifyToken(token: string): Promise<boolean> {
        try {
            await getValueFromToken(token);
            return true;
        } catch (error) {
            return false;
        }
    }

    return {
        generateToken,
        getValueFromToken,
        verifyToken,
    };
}
