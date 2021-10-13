import { useState } from "react";
import styles from "./inputForm.css";

import { Form, Button, Dropdown, Container, Row, Col } from "react-bootstrap";

import CurrencyInput from "./CurrencyInput/CurrencyInput";
import PayType from "../PayType/paytype";
import PhoneNumberInput from "./PhoneNumberInput/PhoneNumberInput";
const InputForm = (props) => {
  //States
  const [isEdit, setIsEdit] = useState(false);
  const [person, setPerson] = useState({
    id: 0,
    name: "",
    age: 0,
    salary: 0,
  });

  //validationState
  const [validation, setValidation] = useState({
    name: false,
    salary: false,
    birthday: false,
  });

  if (!props.showForm) {
    return <></>;
  }

  //Form Control Methods
  const validateForm = (values) => {
    let isValid = true;
    for (const validationStatus in validation) {
      if (!validation[validationStatus]) {
        isValid = false;
      }
    }
    return isValid;
  };

  const clearForm = () => {
    setPerson((previousState) => {
      return { name: "", age: 0, salary: 0 };
    });
  };

  //event handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("IS VALID", validateForm(person));
    if (validateForm(person)) {
      props.addPerson(person);
      clearForm();
    }
  };

  const handleCancel = (event) => {
    console.log("NOTHING TO DO");
  };

  const handleFirstNameChange = (event) => {
    event.target.value.length > 0
      ? setValidation((previousState) => {
          return { ...previousState, name: true };
        })
      : setValidation((previousState) => {
          return { ...previousState, name: false };
        });

    setPerson((previousState) => {
      return { ...previousState, first: event.target.value };
    });
  };

  const handleLastNameChange = (event) => {
    event.target.value.length > 0
      ? setValidation((previousState) => {
          return { ...previousState, last: true };
        })
      : setValidation((previousState) => {
          return { ...previousState, last: false };
        });
    setPerson((previousState) => {
      return { ...previousState, last: event.target.value };
    });
  };

  const handleSalaryChange = (event) => {
    event.target.value > 0
      ? setValidation((previousState) => {
          return { ...previousState, salary: true };
        })
      : setValidation((previousState) => {
          return { ...previousState, salary: false };
        });
    setPerson((previousState) => {
      return { ...previousState, salary: event.target.value };
    });
  };

  const handlePaymentTypeChange = (event) => {};

  const handleBirthDateChange = (event) => {
    new Date(event.target.value) instanceof Date
      ? setValidation((previousState) => {
          return { ...previousState, birthday: true };
        })
      : setValidation((previousState) => {
          return { ...previousState, birthday: false };
        });
    setPerson((previousState) => {
      return { ...previousState, birthday: new Date(event.target.value) };
    });
  };

  const handlePhoneNumberChange = (event) => {};

  const handleEmailChange = (event) => {};

  const handleReportsToChange = (event) => {};

  const handleDepartmentChange = (event) => {};

  const handlePayTypeChange = (value) => {
    console.log(value);
    setIsEdit(!isEdit);
  };

  const handleStartingPayRateChange = (value) => {};

  const handleCurrentPayRateChange = (value) => {};
  return (
    <Container>
      <Row className="mb-2">
        <h2>{isEdit? `Edit ${person.name} 's Information` : "Add A New Employee"}</h2>
        <Form className={"input-form"} onSubmit={handleSubmit}>
          <Row xs={1} md={3} className="mb-2">
            <Col>
              <Form.Label>Name</Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="First Name"
                onChange={handleFirstNameChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="2">
              <Form.Label>Email Address</Form.Label>
            </Col>
            <Col lg="4">
              <Form.Control type="email" placeholder="Enter Email" />
            </Col>
            <Col lg="4">
              <PhoneNumberInput/>
            </Col>
          </Row>
          <hr />
          <Row>
            <Form.Label>Pay</Form.Label>
            <Col md={6}>
              {isEdit && (
                <CurrencyInput
                  placeholder="Current Rate"
                  onChange={handleCurrentPayRateChange}
                />
              )}
              {!isEdit && (
                <CurrencyInput
                  placeholder="Starting Pay Rate"
                  onChange={handleStartingPayRateChange}
                />
              )}
            </Col>
            <Col md={2}>
              <PayType onChange={handlePayTypeChange} />
            </Col>
            <Col md={1}></Col>
          </Row>
          <hr />

          <Row>
            <Col md={3} className="mb-2">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="department">
                  Department
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/">Department</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col md={3}>
              <Dropdown>
                <Dropdown.Toggle variant="primary">Reports To</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Reports To</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="pull-right">
              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd-mm-yyy"
                  min={new Date()}
                />
              </Form.Group>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Form.Group className="border  rounded rounded-right p-1">
            <Button variant="success" onClick={() => {}}>
            {!isEdit? "Add" : "Save"}
            </Button>
            <Button variant="dark" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default InputForm;
