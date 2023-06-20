import React from "react";
import { render } from "react-dom";
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
    render(<App/>, document.querySelector(rootEl));
}

prepare();

export * from "./core/utils";
export * from "./types";