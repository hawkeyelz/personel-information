import React from 'react';
import {
    InputGroup,
    Form
  } from "react-bootstrap"; 
  
  const CurrencyInput = (props)=> {
    const onChange= (event) => {
      (props.onChange) && props.onChange(event.target.value)
    }
      return (
          <div>
             <Form.Group style={{width:'100%'}}>
              <Form.Label>{props.Label}</Form.Label>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder={props.placeholder}
                aria-label={props.ariaLabel}
                min="0.00"
                max="999999999.999"
                className={props.className}
                value = {props.value}
                style= {props.style}
                onChange = {onChange}
              />
            </Form.Group>           
          </div>
      )
  }
  export default CurrencyInput
  