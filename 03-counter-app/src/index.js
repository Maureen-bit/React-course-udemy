import React from "react";
import ReactDOM  from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root');
//ReactDOM.render(<PrimeraApp saludo="Hola Maureen" />, divRoot);
ReactDOM.render(<CounterApp value={13} />, divRoot);