import { Context } from 'koa';
import Router from 'koa-router';
import { FormError } from '@gcp-libs/errors';
import logger from '@root/tools/logger';
import authUser from './auth';
import registrUser from './regist';

const router = new Router();

router.get('/', async function handleHomeRoute(context: Context): Promise<void> {
    context.body = 'Current service authenticates users.';
})

router.post('/auth', async function handleAuthRoute(context: Context): Promise<void> {
    const userToken: string | null = await authUser(context.request.body);

    if (userToken === null) {
        logger.error("User wasn't found with such login or password.", {
            ip: context.request.ip,
        });

        throw new FormError({
            globalErrors: ["User wasn't found with such login or password."],
        });
    }

    context.body = userToken;
});

router.post('/registr', async function handleRegistrRoute(context: Context): Promise<void> {
    try {
        await registrUser(context.request.body);
    } catch (error) {
        if (error instanceof FormError) {
            throw error;
        }
        throw new FormError({
            globalErrors: ['Cannot registr a user.'],
        });
    }
});

export default router;
