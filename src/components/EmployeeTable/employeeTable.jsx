import { useSelector } from 'react-redux';
import { showEmployees } from '../../redux/slices/employeesSlice';
import { CustomTable } from 'moonshield-table';

function EmployeeTable () {
  const columns = [
    {label: 'First Name', accessor: 'firstname', sortable: true, searchable: true},
    {label: 'Last Name', accessor: 'lastname', sortable: true, searchable: true},
    {label: 'Start date', accessor: 'startday', sortable: true, searchable: true},
    {label: 'Department', accessor: 'department', sortable: false, searchable: true},
    {label: 'Birthday', accessor: 'birthday', sortable: true, searchable: true},
    {label: 'Street', accessor: 'street', sortable: true, searchable: true},
    {label: 'City', accessor: 'city', sortable: true, searchable: true},
    {label: 'State', accessor: 'state', sortable: true, searchable: true},
    {label: 'Zip Code', accessor: 'zipcode', sortable: true, searchable: true},
  ];

  const tableData = useSelector(showEmployees);


  return (
    <div className='employee-table-container'>
      <CustomTable columns={columns} searchFeature={true} rowsPerPage={10} data={tableData} />
    </div>
  );
}

export default EmployeeTable;