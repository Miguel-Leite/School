import './index.css'
import './assets/lib/bootstrap/css/bootstrap.min.css'
import './assets/lib/ionicons/css/ionicons.min.css'
import './assets/lib/bootstrap/js/bootstrap.min.js'
import './assets/lib/bootstrap/js/jquery.min.js'
// import './assets/lib/jquery/jquery.min.js'
import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

