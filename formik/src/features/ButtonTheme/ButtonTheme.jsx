import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { ImSun } from "react-icons/im";
import { LuMoon } from "react-icons/lu";
const ButtonTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button type='button' onClick={() => toggleTheme()}> {theme === 'dark-theme' ? (
     <LuMoon size={24} color='#9CDFDF' />
      ) : (
        <ImSun size={24} color='#7E8FDD'/>
      )}</button>
    </div>
  )
}

export default ButtonTheme
