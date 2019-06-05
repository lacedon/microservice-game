import util from 'util';
import jwt, { Secret, SignOptions, VerifyOptions } from 'jsonwebtoken';

export type TPayload = string | Buffer | object;

export const promisifiedJWTSign: (
    payload: TPayload,
    secret: Secret,
    options?: SignOptions,
) => Promise<string> = util.promisify(jwt.sign);

export const promisifiedJWTVerify: (
    token: string,
    secret: string | Buffer,
    options?: VerifyOptions,
) => Promise<TPayload> = util.promisify(jwt.verify);
