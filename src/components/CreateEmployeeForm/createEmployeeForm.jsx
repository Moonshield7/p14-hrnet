import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeesSlice';
import { getAllStates } from '../../redux/slices/statesSlice';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectComponent from '../SelectComponent/selectComponent';


function CreateEmployeehtmlForm () {
  const dispatch = useDispatch();
  const states = useSelector(getAllStates);

  // Array containing the names of the states for the select component
  const statesNames = [];
  states.forEach(el => statesNames.push(el.name));

  // Array containing the departments for the select component
  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const [formError, setFormError] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState();


  function handleSubmit(e){
    e.preventDefault();
    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const birthday = document.getElementById('date-of-birth').value;
    const startday = document.getElementById('start-date').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;
    const department = document.getElementById('department').value;

    console.log(state);

    if(firstname.length > 0 && lastname.length > 0 && birthday.length > 0 && startday.length > 0 && street.length > 0 && city.length > 0 && department.length > 0 && zipCode > 0){
      dispatch(addEmployee({
        firstname: firstname,
        lastname: lastname,
        birthday: birthday,
        startday: startday,
        street: street,
        city: city,
        state: state,
        zipcode: zipCode,
        department: department,
      }));
      setFormError(false);
    } else {
      setFormError(true);
    }
  }

  return (
    <form action="#" id="create-employee">
      <h2 className="form-title">Create a new employee</h2>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker id="date-of-birth" selected={birthDate} onChange={(date) => setBirthDate(date)} />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />

      <fieldset className="address">
          <legend className="address-title">Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <SelectComponent type="state" opts={statesNames}/>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <SelectComponent type="department" opts={departments}/>
      <button className="form-button" onClick={handleSubmit}>Save</button>
      {formError ? <p>Please, fill all of the form inputs</p> : ''}
    </form>
  );
}

export default CreateEmployeehtmlForm;