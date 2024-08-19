import React from 'react'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import ContactForm from '../../components/ContactForm/ContactForm'
const Contacts = () => {
  return (
    <div className='contacts_container'>
     <ContactForm/>
     <ContactInfo/>
    </div>
  )
}

export default Contacts
