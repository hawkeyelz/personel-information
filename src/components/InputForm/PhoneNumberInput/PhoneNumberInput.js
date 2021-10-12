// import React from "react";

// const PhoneNumberInput = (props) => {

// const handleExChange = (event) => {

// }

//   return (<Form.FormGroup>
//       <Form.FormControl maxLength="16"/>
//       <Form.FormControl maxLength="5"/>
//   </Form.FormGroup>);
// };
// export default PhoneNumberInput;

import React from "react";
import styles from "./PhoneNumberInput.module.css";
import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";

const PhoneNumberInput = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const pattern = new RegExp(
      /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
    );
    console.log(pattern.test(value));
  };

  return (
    <div className={props.className}>
      <>
        <Row>
            <Col lg="2">
            <Form.Label>Phone</Form.Label>
            </Col>
          <Col lg="6">
            <FormControl
              className="mr-2"
              type="text"
              maxLength="10"
              minLength="10"
              placeholder="Enter Phone Number"
              onChange={handleChange}
            />
            </Col>
            <Col lg="4">
            <FormControl
            className="ext"
              type="number"
              type="text"
              maxLength="5"
              minLength="0"
              placeholder="EXT"
            />
          </Col>
        </Row>
      </>
    </div>
  );
};

export default PhoneNumberInput;
