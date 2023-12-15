import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: []
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, payload) => {
      state.employees.push(payload.payload);
    }
  }
});

export const { addEmployee } = employeesSlice.actions;

export const showEmployees = (state) => state.employees.employees;

export default employeesSlice.reducer;