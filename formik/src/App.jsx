
import { useContext } from 'react';
import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout";
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import { ThemeContext } from './features/ThemeContext/ThemeContext';


export const App = () =>  {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} app`}>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/about' element={<About/>}/>
  </Route>
  <Route path="*"  element ={<Navigate to = " / "  />}/>
</Routes>
    </div>
  )
}

