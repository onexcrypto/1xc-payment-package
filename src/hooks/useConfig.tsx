import { useMemo } from "react";
import { OnexcConfig } from "../types";

export function usePrepareConfig(conf: OnexcConfig) {

    const paymentUrl = useMemo(() => {
        return conf.mode === "test" ? "https://sandbox-payment.1xcrypto.net" : "https://payment.1xcrypto.net";
    }, [conf.mode]);

    return {
        url: `${paymentUrl}/?intent=${conf.intentId}&mode=onsite`,
    }
}