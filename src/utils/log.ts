
interface ILogger {
    all(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
}

class DefLogger {
    all(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams)
    }
    log(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams)
    }
}

const defLogger: ILogger = new DefLogger();

export {
    defLogger
}
