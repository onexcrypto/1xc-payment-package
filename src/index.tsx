import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ReactModal from "react-modal";

let rootEl = "#onexc__root";
function prepare() {
  let root: HTMLDivElement | null = document.querySelector(rootEl);
  if (!root) {
    root = document.createElement("div") as HTMLDivElement;
    root.id = rootEl.replace("#", "");
    root.style.visibility = "hidden";
    root.style.width = "0px";
    root.style.height = "0px";
    document.body.appendChild(root);
  }

  ReactModal.setAppElement(rootEl);
  let onexcRoot = createRoot(root);
  onexcRoot.render(<App />);
}

prepare();

export * from "./core/utils";
export * from "./types";
