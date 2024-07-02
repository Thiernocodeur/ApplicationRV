import { useState } from 'react'
import { BrowserRouter,   Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import FirstSreen from './components/FirstSreen';

import { Rv } from './pages/auth/Rv';
import { Contact } from './pages/auth/Contact';
import { NoPage } from './pages/auth/NoPage';
import {Connexion} from './pages/auth/connexion'
// import { Dashbord } from './components/Dashbord';

import { SecondDashboard } from "./components/SecondDashboard";
import { Accueils } from "./pages/pagesDashboard/Accueils";
import { Mesrv } from "./pages/pagesDashboard/Mesrv";
import { Mespatients } from "./pages/pagesDashboard/Mespatients";
import { Moncompte } from "./pages/pagesDashboard/Moncompte";


// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    {/* <Navbar/>
   <FirstSreen/>  */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<FirstSreen/>} />
          <Route path="/about" element={<Rv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
         
          
          <Route path="*" element={<NoPage />} />
         
        </Route>
        <Route path="/dashbord" element={<SecondDashboard />}>
            <Route index element={<Accueils />} />
            <Route path="/dashbord/rv" element={<Mesrv />} />
            <Route path="/dashbord/patients" element={<Mespatients />} />
            <Route path="/dashbord/compte" element={<Moncompte />} />
          </Route>
      </Routes>
    </BrowserRouter>
   
  </>
  )
}

export default App
