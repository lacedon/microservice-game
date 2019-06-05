import path from 'path';
import winston from 'winston';

import { ILoggerOptions, ILogger, TMetaItem } from './logger-interfaces';

enum Level {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
}

export default class WinstonLogger implements ILogger {
    private logger: winston.Logger | null = null;

    private checkIfInit(): void {
        if (this.logger === null) {
            throw new Error('You need to initilize logger before using it');
        }
    }

    public init({ rootFolder }: ILoggerOptions) {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({
                    filename: path.resolve(rootFolder, 'error.log'),
                    level: 'error',
                }),
                new winston.transports.File({
                    filename: path.resolve(rootFolder, 'combined.log'),
                }),
                new winston.transports.Console({
                    format: winston.format.simple(),
                }),
            ],
        });
    }
    public info(message: string, ...meta: TMetaItem[]): void {
        this.checkIfInit();
        this.logger.log(Level.Info, message, ...meta);
    }
    public warning(message: string, ...meta: TMetaItem[]): void {
        this.checkIfInit();
        this.logger.log(Level.Warning, message, ...meta);
    }
    public error(message: string, ...meta: TMetaItem[]): void {
        this.checkIfInit();
        this.logger.log(Level.Error, message, ...meta);
    }
}
