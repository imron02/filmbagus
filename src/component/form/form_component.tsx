import React from 'react';
import FormInputComponent from './form_input_component';

const Form = (props: { children: React.ReactNode }) => {
  return props.children;
};

Form.Input = FormInputComponent;

export default Form;
