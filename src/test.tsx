import * as pc from "playcanvas"
import * as ReactDOM from 'react-dom/client';
import * as React from "react"
import { StrictMode } from "react";
import Hello from "./components/Hello"
export class TestScript extends pc.ScriptType {
  initialize() {
    console.log("Hello World!")
    const reactEntryPoint = document.createElement("div")
    reactEntryPoint.style.position = "absolute"
    reactEntryPoint.id = "root"
    document.body.appendChild(reactEntryPoint)
    const root = ReactDOM.createRoot(reactEntryPoint)
    root.render(
      <StrictMode>
        <Hello />
      </StrictMode>
    )
  }
}

pc.registerScript(TestScript, "test")