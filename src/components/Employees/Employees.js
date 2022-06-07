import { useEffect, useState} from 'react';
import Employee from '../Employee/Employee';
import axios from 'axios';

const Employees = () => {
        const [employees, setEmployees] = useState([
                
        ]);

        useEffect(() => {
                axios.get('employees.json')
                .then(result =>
                        setEmployees(result.data))
                .catch(error => console.log(error));
        },[])

        const addEmployee = () => {
          setEmployees([...employees, {empId: 9876,name: 'Julian', designation: 'SW'}])
        }

        return (
            <Employee employees={employees} addEmployee = {addEmployee}/>
        )
}
export default Employees;
