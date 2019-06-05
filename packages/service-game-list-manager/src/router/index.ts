import { Context } from 'koa';
import Router from 'koa-router';
import { FormError } from '@gcp-libs/errors';
import logger from '@root/tools/logger';

const router = new Router();

router.get('/', async function handleHomeRoute(context: Context): Promise<void> {
    context.body = 'Current service manage game list.';
});

export default router;
