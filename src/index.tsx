import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/index.scss";
import ReactModal from "react-modal";

let rootEl = "#onexc__root";
ReactModal.setAppElement(rootEl);

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
}

prepare();
render(<App/>, document.querySelector(rootEl));