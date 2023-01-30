import { useState } from 'react';
import Input from './components/FormFields/Input';
function App() {
  const [values, setvalues] = useState({
    name: "",
    phone: ""
  })
  const formFields = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      label: "Name",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage: "Name should be 3-16 characters and should not be include any special character!!",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Enter Phone",
      label: "Phone",
      required: true,
      pattern:`[+]?([8]{2})?(01)[3-9]{1}[0-9]{8}` ,
      errorMessage: "Phone Number Not Vaild",
    }
  ]
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const handleChange = (e) =>{
    setvalues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  console.log(values);
  return (
      <form
      onSubmit={handleSubmit}
      // autocomplete="off"
      >
        {formFields.map(field => 
        <Input 
        key = {field.id}
        {...field}
        handleChange = {handleChange}
        value={values[field.name]}
        />
        )}
        
        <button type="submit">Submit</button>
      </form>
  );
}

export default App;
