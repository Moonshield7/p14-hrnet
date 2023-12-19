import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employeesSlice';
import statesReducer from './slices/statesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    states: statesReducer
  }
});