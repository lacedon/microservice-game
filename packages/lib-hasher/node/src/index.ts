import crypto from 'crypto';

const hashAlgorithm = 'sha256';
const encoding = 'hex';

interface IOptions {
    privateKey: string | Buffer;
}

export default function createHashGetter({
    privateKey,
}: IOptions): (hashingString: string) => string {
    return function getHash(hashingString: string): string {
        return crypto
            .createHmac(hashAlgorithm, privateKey)
            .update(hashingString)
            .digest(encoding);
    };
}
