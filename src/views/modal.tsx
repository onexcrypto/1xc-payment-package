import ReactModal from "react-modal";
import { useGateway } from "../contexts/ConfigContext";
import React from "react";

export function PaymentModal(props: ReactModal.Props) {
  const gateway = useGateway();

  return (
    <ReactModal {...props}>
      <div>
        <iframe ref={(el) => gateway.configure(el as any)} src={gateway.url}></iframe>
      </div>
    </ReactModal>
  );
}
