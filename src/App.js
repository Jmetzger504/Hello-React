import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Employees from './components/Employees/Employees';
import PropTypes from 'prop-types'
import Login from './components/Login/Login';
import EmployeeManagement from './components/EmployeeManagement/EmployeeManagement';

function App(props) {

  let x=25,y=30;

  let loggedIn = false;
  let element = null
  if(loggedIn)
    element = <h2>Hello there</h2>;
  else
    element = <h2>ACCESS DENIED</h2>

  let employees = [
    {empId: 123, name: "John", designation: "SE"},
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]

  const [name,setName] = useState("Tom");
  let [counter,setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect was called in App.js!");
  })

  let [username,setUsername] = useState('');

  return <React.Fragment>
    <h2>ReactJS</h2>
    <img src = {logo} width = "120" height = "120" alt="React logo"></img>
    <p>
    React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
    </p>
    <h2>Expression evalutation</h2>
    <h3>{x} {">"} {y}{':'} {x>y ? 'True' : 'False'}</h3>
    {element}
    <h2>Table via map function (no key)</h2>
    <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Table via map function with empID as unique key</h2>
      <table>
      <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (<tr key = {employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>)
          })}
        </tbody>
      </table>
      <h2 style={{color: 'green', fontfamily: 'Verdana'}}>Bootstrap Button</h2>
      <button className = 'btn btn-success'>Click Me!</button>
      <h2>React-Bootstrap Button</h2>
      <Button variant="warning">Click me!</Button>
      <h2>Material-UI Typography. H4 Variant.</h2>
      <Typography variant = "h4" gutterBottom>Welcome to React!</Typography>
      <Typography variant = "h4" gutterBottom>useState hook examples</Typography>
      <div>
        Your Name is: {name}<br/>
        <button onClick = {()=> name === 'Tom' ? setName("Jerry") : setName("Tom")}>Toggle your name!</button>  
      </div>
      <div>
        Count: {counter}<br/>
        <button className = 'btn btn-primary' onClick = {() => setCounter(counter+1)}>+</button>
        <button className = 'btn btn-secondary' onClick = {() => setCounter(counter-1)}>-</button>
      </div>
      <Employees></Employees>
      <Typography variant = "h4" gutterBottom>Some default props</Typography>
      <h4>{props.element1}</h4>
      <h4>{props.element2}</h4>
      <Typography variant = "h4" gutterBottom>More default props with propTypes</Typography>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">{props.productName} - {props.colors.map(function(color,index){
            return <span key = {index}>{color},</span>
          })} </h5>
   
           <p className="card-text">Price:
            {props.price}
          </p>
          {props.availability ? null: <p className="text-danger">Product out of stock</p>}
          <p>Rating: {props.feedback.rating}</p>
          <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
      <h2>onChange Prop Demo</h2>
      <input
        style = {{width: "40%"}}
        type = "text"
        value = {username}
        onChange = {(event) => setUsername(event.target.value)}
        className = "form-control"
        placeholder = "Enter your name!"
        ></input>
      <h3>Your name is: {username}</h3>
      <h2>Login Demo</h2>
      <Login></Login>
      <br/>
      <EmployeeManagement></EmployeeManagement>
  </React.Fragment>
  
}

App.defaultProps = {
  element1: "Hello",
  element2: "World!",
  productName: "iPhone",
  price: 500,
  colors: ["Black","Blue","White"],
  availability: true,
  feedback: {
    rating: 4,
    comments: "It's aight."
  },
  addToCart: function (e) {

  }
}

App.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number,
  colors: PropTypes.array,
  availability: PropTypes.bool,
  feedback: PropTypes.object,
  addToCart: PropTypes.func
}

export default App;
