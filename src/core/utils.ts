import { OnexcGateway } from "./types";

function setGateway(gateway: OnexcGateway) {
    (window as any).__ONEXC__ = gateway;
}

function getGateway() {
    return (window as any).__ONEXC__ as OnexcGateway;
}

export const Onexc = {
    get gateway() {
        return getGateway();
    },
    set gateway(params: OnexcGateway) {
        setGateway(params);
    }
}