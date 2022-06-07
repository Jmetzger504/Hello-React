import {React,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError]= useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if(username===""||password==="") {
      setError("Enter username and password")
      setSuccess("")
    }
    else {
      setSuccess("Login successful")
      setError("")
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "20%" }}
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "20%" }}
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );

};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
