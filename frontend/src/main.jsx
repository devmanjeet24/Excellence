import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from "./context/AuthContext";
// import Navbar from './Components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      {/* <Navbar /> */}
    <App />
    </AuthContextProvider>
  </StrictMode>,
)
