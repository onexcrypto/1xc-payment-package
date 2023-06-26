import ReactModal from "react-modal";
import { useGateway } from "../contexts/ConfigContext";
import React from "react";
import { css } from "@emotion/css";

const styles = {
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  content: css`
    position: relative;
    background: #f9f9f9;
    overflow: auto;
    outline: none;
    width: 800px;
    height: 100vh;
    max-width: 600px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media-screen and(max-width: 900px) {
      width: 100%;
    }
  `,

  frame: css`
    width: 100%;
    height: 100%;
    border: none;
  `
};

export function PaymentModal(props: ReactModal.Props) {
  const gateway = useGateway();

  return (
    <ReactModal
      overlayClassName={styles.overlay}
      className={styles.content}
      {...props}
    >
      <iframe
        ref={(el) => gateway.configure(el as any)}
        src={gateway.url}
        className={styles.frame}
      ></iframe>
    </ReactModal>
  );
}
