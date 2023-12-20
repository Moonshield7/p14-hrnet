import { useSelector } from 'react-redux';
import { showEmployees } from '../../redux/slices/employeesSlice';
import './employeeTable.css';
import { useEffect } from 'react';
import EmployeeTableHeader from '../EmployeeTableHeader/employeeTableHeader';

function EmployeeTable () {
  const tableData = useSelector(showEmployees);
  const tableTitles = ['First name', 'Last Name', 'Start date', 'Department', 'Birthday', 'Street', 'City', 'State', 'Zip code'];

  useEffect(() => {
    const table = document.querySelector('.custom-table');
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.rows);
    console.log();
    const headerCells = table.tHead.rows[0].cells;
    
    for (const th of headerCells) {
      const cellIndex = th.cellIndex;
  
      th.addEventListener('click', () => {
        rows.sort((tr1, tr2) => {
          const tr1Text = tr1.cells[cellIndex].textContent;
          const tr2Text = tr2.cells[cellIndex].textContent;
          return tr1Text.localeCompare(tr2Text);
        });
  
        tBody.append(...rows);
      });
    }


  }, []);


  return (
    <>
      <table className='custom-table'>
        <thead>
          <tr>
            {tableTitles.map(title => <EmployeeTableHeader key={title} title={title}/>)}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr key={item.firstname + item.lastname}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.startday}</td>
                <td>{item.department}</td>
                <td>{item.birthday}</td>
                <td>{item.address.street}</td>
                <td>{item.address.city}</td>
                <td>{item.address.state}</td>
                <td>{item.address.zipCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeTable;