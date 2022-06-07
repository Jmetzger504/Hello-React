import {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './EmployeeManagement.module.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeManagement = () => {
  
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [addFlag, setAddFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    setSuccess("")
    if (name === "" || designation === "") {
      setMessage("Please enter the values");
    } else {
      setMessage("");
      setAddFlag(false);
      let newEmployee = { name: name, designation: designation };
      axios.post("http://localhost:4000/employees", newEmployee).then((res) => {
        setEmployees([...employees, res.data]);
        setSuccess(`New Employee has been added with the id ${res.data.id} `)
      });
      setName("");
      setDesignation("");
    }
  };

  const deleteEmployee = (empId) => {
    setSuccess("")
    let employeeId = parseInt(empId);
    axios
      .delete("http://localhost:4000/employees/" + employeeId)
      .then((res) => {
        axios.get("http://localhost:4000/employees").then((res) => {
          setEmployees(res.data);
        });
      });
  };

  return (
    <>
    <table style={{ width: "60%" }} className="table table-bordered">
      <thead>
        <tr>
          <th>EmpID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>
                  <button onClick={() => deleteEmployee(employee.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </tbody>
    </table>
    <button onClick={() => setAddFlag(!addFlag)} className="btn btn-primary">
      Add Employee
    </button>
    <br />
    <br />
    <div className="text-success">{success}</div>
    {addFlag ? (
      <form>
        EmpName:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setMessage("");
          }}
        />
        <br />
        <br />
        Designation:{" "}
        <input
          type="text"
          value={designation}
          onChange={(e) => {
            setDesignation(e.target.value);
            setMessage("");
          }}
        />
        <br />
        <br />
        <button onClick={addEmployee} className="btn btn-primary">
          Add
        </button>
        <div className="text-danger">{message}</div>
      </form>
    ) : null}
  </>
  )
};

EmployeeManagement.propTypes = {};

EmployeeManagement.defaultProps = {};

export default EmployeeManagement;
