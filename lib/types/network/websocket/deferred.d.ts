export declare class Deferred<T> {
    private _promise;
    private _resolve;
    private _reject;
    constructor();
    readonly promise: Promise<T>;
    resolve: (value?: T | PromiseLike<T> | undefined) => void;
    reject: (reason?: any) => void;
}
