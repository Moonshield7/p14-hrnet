
function EmployeeTableHeader ({title}) {
  return (
    <th>
      {title} 
      <div className="table-arrows">
        <i className="fa-solid fa-chevron-up"></i>
      </div> 
    </th>
  );
}

export default EmployeeTableHeader;