import React from "react"
import ReactDOM from "react-dom"
import AnterosApp from './components/AnterosApp';
import store from "./store";
import {Provider} from "react-redux";
import "anteros-react-theme/lib/anteros-react-theme-gazin.css";
import "anteros-react-editors/lib/anteros-react-editors.min.css";
import "anteros-react-image/lib/anteros-react-image.min.css";
import "anteros-react-misc/lib/anteros-react-misc.min.css";
import "./components/temp.css";

ReactDOM.render(<Provider store={store}>
    <AnterosApp />
</Provider>, document.getElementById("app"));
