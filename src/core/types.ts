export interface OnexcRequest {

}

export interface OnexcInvoice {

}

export interface OnexcPayment {

}

export interface OnexcGateway {
    launch(config: OnexcConfig): any;
    release(): any;
}

export interface OnexcConfig {
    mode: "live" | "test";
    apiKey: string;
    intentId: string;
    onFulfilled?(request: OnexcRequest, invoice: OnexcInvoice, payment: OnexcPayment): any;
    onCancelled?(request: OnexcRequest, invoice?: OnexcInvoice): any
}