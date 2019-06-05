import Logger from './winston-logger';
import { ILogger } from './logger-interfaces';

export { ILogger } from './logger-interfaces';

export default function createLogger(): ILogger {
    return new Logger();
}
