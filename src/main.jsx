import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LoginBtn from './Components/LoginBtn.jsx';
import LoginForm from './Components/LoginForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/loginbtn" element={<LoginBtn />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/" element={<App />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

