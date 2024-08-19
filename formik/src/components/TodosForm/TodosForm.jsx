import React from "react";
import {Field, Form, Formik} from "formik"

const TodosForm = ({ handleAddTodos }) => {

const initialState = {
  text: "",
}

const validation = (values) =>  {
const errors = {};
if(!values.text){
  errors.text = "Required"
}else if(values.text.length < 5){
  errors.text = "Must be at least 5 characters"
}
return errors;
}

const onSubmit = (values, {resetForm}) => {
  handleAddTodos(values.text);
resetForm({
    values: { text: '' },
  });
}



  return (
    <>
    <Formik initialValues={initialState} onSubmit={onSubmit} validate={validation}>
      {({errors,touched}) => (
         <Form className="form">  
         <div className="todos_form_group">
              <Field
          className={errors.text? 'error_input' : 'form_input'}
          type="text"
          autoComplete="off"
          placeholder="Enter task text..."
          name="text"
        /> {errors.text && touched.text ? (
        <div className="todos_form_error">{errors.text}</div>
        ):null}  
         </div>
    
         <button className="form__btn" type="submit">Add task</button>
      </Form>  
      )}
    </Formik>
  </>  
  );
};

export default TodosForm;
