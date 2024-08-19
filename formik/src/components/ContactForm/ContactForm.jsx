import React, { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import {Field, Form, Formik} from "formik"


const ContactForm = () => {

const initialState = {
  name:"",
  phone:"",
  message:"",
}

const validation = values => {
  const errors ={};
  if(!values.name){
     errors.name = "Required"
  }else if(!/^(\+380)[0-9]{9}$/.test(values.phone)){
    errors.phone = 'Invalid phone number';
  }
  return errors
}

const onSubmit = (values, {resetForm})=>{
  console.log(values.name, values.phone ,values.message);
  resetForm({
    values: { name: '', phone: '', message: '' },
  });
}


  return (
    <>
     <Formik initialValues={initialState} onSubmit={onSubmit} validate={validation}>
      {({errors, touched}) => (
         <Form className="form_contact" >
        <h2>Contact us</h2>
        <div className="form-group">
          <Field
            className={errors.name? 'form_contact_error_input' : 'form_contact_input'}
            type="text"
            name="name"
         autoComplete="off"
            placeholder="Name"
          />{errors.name && touched.name ? (
            <div className="form_contact_error_text_name">{errors.name}</div>
          ): null}
          <GoPerson className={errors.name? 'contact_form_icon_error' : 'contact_form_icon'} />
        </div>
 
  <div className="form-group">
          <Field
    className={errors.phone? 'form_contact_error_input' : 'form_contact_input'}
            type="tel"
            name="phone"
           autoComplete="off"
            placeholder="+380"
          />{errors.phone && touched.phone ? (
            <div className="form_contact_error_text_phone">{errors.phone}</div>
          ): null}
          <LuPhone className={errors.phone? 'contact_form_icon_error' : 'contact_form_icon'}/>
     
        </div>

  <div className="form-group">
          <Field
          type="text"
          name="message"
           as="textarea"
            rows="4"
            className="form_contact_textarea"
            placeholder="Message"
          ></Field>
        </div>
        <button type="submit" className="form_contact_btn">
          Send
        </button>
      </Form>
      )}
    </Formik>
    </>
   
  );
};

export default ContactForm;
