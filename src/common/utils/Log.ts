export class Log {
    static debug(msg: string, ...details: any[]): void {
        this.emitLogMessage('debug',msg,details)
    }

    static warn(msg: string, ...details: any[]): void {
        this.emitLogMessage('warn',msg,details)
    }

    static error(msg: string, ...details: any[]): void {
        this.emitLogMessage('error',msg,details)
    }

    static info(msg: string, ...details: any[]): void {
        this.emitLogMessage('info',msg,details)
    }

    private static emitLogMessage(msgType: 'debug' | 'info' | 'warn' | 'error', msg: string, details: any[]) {
        if (details.length > 0) {
            console[msgType](msg,details)
        } else {
            console[msgType](msg)
        }
    }
}