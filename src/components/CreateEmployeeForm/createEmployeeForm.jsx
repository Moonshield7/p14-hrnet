import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeesSlice';
import { useState } from 'react';

function CreateEmployeehtmlForm () {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const birthday = document.getElementById('date-of-birth').value;
    const startday = document.getElementById('start-date').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = 'placeholder';
    const zipCode = document.getElementById('zip-code').value;
    const department = document.getElementById('department').value;

    if(firstname.length > 0 && lastname.length > 0 && birthday.length > 0 && startday.length > 0 && street.length > 0 && city.length > 0 && department.length > 0 && zipCode > 0){
      dispatch(addEmployee({
        firstname: firstname,
        lastname: lastname,
        birthday: birthday,
        startday: startday,
        address: {
          street: street,
          city: city,
          state: state,
          zipCode: zipCode
        },
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
      <input id="date-of-birth" type="text" />

      <label htmlFor="start-date">Start Date</label>
      <input id="start-date" type="text" />

      <fieldset className="address">
          <legend className="address-title">Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
      </select>
      <button className="form-button" onClick={handleSubmit}>Save</button>
      {formError ? <p>Please, fill all of the form inputs</p> : ''}
    </form>
  );
}

export default CreateEmployeehtmlForm;