import { useSelector } from 'react-redux';
import Header from '../../components/Header/header';
import { showEmployees } from '../../redux/slices/employeesSlice';

function EmployeesList () {
  const employees = useSelector(showEmployees);
  console.table(employees);
  return (
    <div>
      <Header />
      honk
    </div>
  );
}

export default EmployeesList;