
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { BubblyContainer } from "react-bubbly-transitions";

import './index.css';
import './scss/styles.js';
import './fonts/Aquire/Aquire.otf'

import HomePage  from "./pages/HomePage";
import FirstTest from "./pages/FirstTest";
import SecondTest from "./pages/SecondTest";
import ThirdTest from "./pages/ThirdTest";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BubblyContainer/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test1" element={<FirstTest />} />
      <Route path="/test2" element={<ThirdTest />} />
      <Route path="/test3" element={<SecondTest />} />
    </Routes>
  </BrowserRouter>,
  root
);

