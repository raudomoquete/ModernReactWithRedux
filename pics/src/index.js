import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from "./api";

searchImages(); //for test purposes

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);