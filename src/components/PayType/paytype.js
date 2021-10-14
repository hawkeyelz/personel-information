import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./paytype.module.css";

const PayType = (props) => {
  const checkValue = (value) => {
    props.onChange && props.onChange(value);
  };
  return (
    <Row>
      <Col>
        <Form.Label className={styles.label}>Hourly</Form.Label>
        <Form.Check
          className={styles.check}
          type="radio"
          name="pay-type"
          onChange={() => {
            checkValue("hourly");
          }}
        ></Form.Check>
        </Col>
        <Col>
        <Form.Label className={styles.label}>Salary</Form.Label>
        <Form.Check
          className={styles.check}
          type="radio"
          name="pay-type"
          onChange={() => {
            checkValue("salary");
          }}
        ></Form.Check>
        </Col>
    </Row>
  );
};
export default PayType;
