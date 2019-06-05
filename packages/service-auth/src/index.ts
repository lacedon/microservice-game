import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

import logger from '@root/tools/logger';
logger.init({ rootFolder: path.resolve(__dirname, '../') });

import Koa from 'koa';
import bodyParser from 'koa-body';
import errorHandler from '@gcp-libs/koa-error-middleware';
import router from '@root/router';

const port: number = +process.env.PORT || 80;
const host: string = process.env.HOST || 'localhost';

const server = new Koa();
server
    .use(bodyParser())
    .use(errorHandler())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(
        port,
        host,
        (): void => logger.info(`Start auth service on port http://${host}:${port}`),
    );
