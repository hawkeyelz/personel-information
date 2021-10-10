import { useState } from "react";
import styles from "./inputForm.css";
import { Form, Button, Alert, InputGroup, Dropdown, Container, Row, Col } from "react-bootstrap";
const InputForm = (props) => {
  //States
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

  const handleNameChange = (event) => {
    event.target.value.length > 0
      ? setValidation((previousState) => {
          return { ...previousState, name: true };
        })
      : setValidation((previousState) => {
          return { ...previousState, name: false };
        });

    setPerson((previousState) => {
      return { ...previousState, name: event.target.value };
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

  const handleReportsToChange = (event) => {};

  const handleDepartmentChange = (event) => {};

  return (
    <Container>
      <Row>
      <h2>Enter New Personal's Information</h2>
      <Form className={"input-form"} onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3"> */}
          <Row xs={1} md={3} className="mb-2">
          <Col>
          <Form.Label>Name</Form.Label>
          </Col>
          <Col>
          <Form.Control placeholder="First Name" />
          </Col>
          <Col>
          <Form.Control placeholder="Last Name" />
          </Col>
          </Row>
        {/* </Form.Group> */}
        {/* <Form.Group className="mb-1"> */}
        <Row>
    
          <Form.Group>
          <Form.Label>Salary</Form.Label>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Salary"
            min="0.00"
            max="999999999.999"
            style={{marginRight: '1rem'}}
          />
          </Form.Group>
          </Row>
          <Row xs={2} md={3}>
            <Col>
          <Form.Label>Payrate</Form.Label>
          </Col>
          <Col>
          <Form.Group>
          <Form.Label>Hourly</Form.Label>
          <Form.Check type="radio" name="payrate"></Form.Check>
          <Form.Label>Salary</Form.Label>
          <Form.Check type="radio" name="payrate"></Form.Check>
          </Form.Group>
          <div></div>
          </Col>
          </Row>
          <hr/>

      
        {/* </Form.Group> */}
        <Form.Group>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="department">
              Department
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/">Department</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="primary" id="reportsto">
              Reports To
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Reports To</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" placeholder="dd-mm-yyy" min={new Date()} />
        </Form.Group>
        {/* <div>
          <label>First:</label>
          <input
            className={`input-fields`}
            typeof="text"
            maxLength="255"
            onChange={handleNameChange}
            value={person.name}
          />
          <label>Last: </label>
          <input
            className={`input-fields`}
            typeof="text"
            maxLength="255"
            onChange={handleLastNameChange}
            value={person.last}
          />
        </div>
        <div>
          <label>Birthday</label>
          <input
            className={"input-fields"}
            type="date"
            onChange={handleBirthDateChange}
            />
        </div>
        <div>
          <label>Reports To</label>
          <select className="input-fields" typeof="text" maxLength="255">
            <option> </option>
            <option>Mike Richards</option>
            <option>Jhon Stevens</option>
            <option>Dave Hamelton</option>
          </select>
          <label>Department</label>
          <select className="input-fields">
            className='input-fields'
            <option>Widgit Manufacturing</option>
            <option>Inspection</option>
            <option>Shipping</option>
            <option>Maintenance</option>
          </select>
          <label>Salary: </label>
          $
          <input
            className={`input-fields`}
            type="number"
            onChange={handleSalaryChange}
            value={person.salary}
            min="200"
            max="10000000"
            step="0.01"
          />
          <label>Salary</label>
          <input className={`input-fields`} name="fav_language" type="radio" />
          <label>Hourly</label>
          <input className={`input-fields`} name="fav_language" type="radio" />
        </div>
        <button type="submit">Add</button> */}
      <Form.Group className="border  rounded rounded-right p-1">
      <Button variant="success" onClick={()=>{}}>Save</Button>
      <Button variant="dark" onClick={handleCancel}>Cancel</Button>
      </Form.Group>
      </Form>
      </Row>
    </Container>
  );
};

export default InputForm;
