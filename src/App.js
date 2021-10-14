import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import InputForm from "./components/InputForm/InputForm";
import AddButton from "./components/InputForm/AddButton";



function App() {
  const [personal, setPersonal] = useState([{name: 'bob'}]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddNewClick = (form) => {
    toggleForm();
  };

  const addPerson = (person) => {
    person.id = Math.floor(Math.random() *100);
    alert(JSON.stringify(person,0, 2));
    setPersonal((prevPersonal)=>{ 
      return [...prevPersonal, person]});
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PersonalList</h1>
      </header>
      <InputForm showForm={showForm} onCancel={toggleForm} addPerson={addPerson} />
      {!showForm && <AddButton onCLick={handleAddNewClick} />}
      {personal.map((per, idx)=> (<div key={idx}>{per.id} - {per.name}</div>))}
    </div>
  );
}

export default App;
