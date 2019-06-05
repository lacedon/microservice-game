export type ILoggerOptions = {
    rootFolder: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TMetaItem = any;

export interface ILogger {
    init(options: ILoggerOptions): void;
    error(message: string, ...meta: TMetaItem[]): void;
    warning(message: string, ...meta: TMetaItem[]): void;
    info(message: string, ...meta: TMetaItem[]): void;
}
