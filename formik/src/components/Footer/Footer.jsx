import React from 'react'
import itLogo from "../../assets/Hillel-IT-School.png"
const Footer = () => {

    const logo = itLogo;
  return (
    <>
      <img src={logo} alt='logoItHillel' className='footer_logo'/>
    </>
  )
}

export default Footer
