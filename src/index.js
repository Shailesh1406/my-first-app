import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css"
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

//var element = <button class="btn btn-danger">Hello World !!!</button>;

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);