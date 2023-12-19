function SelectComponent ({opts, type}) {
  return (
    <select name={type} id={type} className="custom-select">
      {opts.map(opt => <option key={opt} value={opt}>{opt}</option> )}
    </select>
  );
}
export default SelectComponent;