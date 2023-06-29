export interface OnexcPaymentEvent {
    intentId: string;
    projectId: string;
    status: "paid";
    intent: any;
    walletId: string;
}

export interface OnexcPaymentFailure {
    reason: string;
    is_attempt_error: boolean;
    intentId: string;
    projectId: string;
    status: "failed",
    attempt_count?: number;
}

export interface OnexcPaymentCancellation {
    reason: "login_failed" | "window_closed";
}

export interface OnexcGateway {
    launch(config: OnexcConfig): any;
    release(): any;
}

export interface OnexcConfig {
    mode: "live" | "test";
    intentId: string;
    onPaid?(params: OnexcPaymentEvent): any;
    onFailed?(params: OnexcPaymentFailure): any;
    onCancelled?(params: OnexcPaymentCancellation): any;
}