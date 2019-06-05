import createHasher from '@gcp-libs/hasher';

export default createHasher({
    privateKey: process.env.HASH_PRIVATE_KEY,
});
