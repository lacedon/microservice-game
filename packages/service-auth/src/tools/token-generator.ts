import createTokenGenerator from '@gcp-libs/token-generator';

export default createTokenGenerator({
    privateKey: process.env.JWT_PRIVATE_KEY,
});
