
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage  from "./pages/HomePage";
import FirstTest from "./pages/FirstTest";
import SecondTest from "./pages/SecondTest";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test1" element={<FirstTest />} />
      <Route path="/test2" element={<SecondTest />} />
    </Routes>
  </BrowserRouter>,
  root
);

