import React from 'react';
import PropTypes from 'prop-types';
import styles from './Employee.module.css';


const Employee = ({employees,addEmployee}) => {
  return (<>
          <br/>
          <button onClick={addEmployee}>Add Julian!</button>
          <table style={{ width: '60%' }} className='table'>
                  <thead className="thead-light">
                          <tr key={employees.empId}>
                                  <th>EmpID</th>
                                  <th>Name</th>
                                  <th>Designation</th>
                          </tr>
                  </thead>
                  <tbody>
                          {employees.map(employee => {
                                  return (<tr>
                                          <td>{employee.empId}</td>
                                          <td>{employee.name}</td>
                                          <td>{employee.designation}</td>
                                  </tr>)
                          })
                          }
                  </tbody>
          </table><br/><br/>
  </>)
}


export default Employee;
