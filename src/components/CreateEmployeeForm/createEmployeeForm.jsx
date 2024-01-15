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
    const firstname = document.getElementById('first-name');
    const lastname = document.getElementById('last-name');
    const birthday = document.getElementById('date-of-birth');
    const startday = document.getElementById('start-date');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');
    const department = document.getElementById('department');

    if(firstname.value.length > 0 && lastname.value.length > 0 && birthday.value.length > 0 && startday.value.length > 0 && street.value.length > 0 && city.value.length > 0 && department.value.length > 0 && zipCode.value > 0){
      dispatch(addEmployee({
        firstname: firstname.value,
        lastname: lastname.value,
        birthday: birthday.value,
        startday: startday.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipcode: zipCode.value,
        department: department.value,
      }));
      setFormError(false);

      firstname.value = '';
      lastname.value = '';
      birthday.value = '';
      startday.value = '';
      street.value = '';
      city.value = '';
      state.value = '';
      zipCode.value = '';
      department.value = '';
      
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