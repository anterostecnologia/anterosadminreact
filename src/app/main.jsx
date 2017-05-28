import React from "react"
import ReactDOM from "react-dom"
import AnterosApp from './components/AnterosApp';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}>
    <AnterosApp />
</Provider>, document.getElementById("app"));
