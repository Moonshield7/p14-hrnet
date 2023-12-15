function CreateEmployeehtmlForm () {

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
      <button className="form-button">Save</button>
    </form>
  );
}

export default CreateEmployeehtmlForm;