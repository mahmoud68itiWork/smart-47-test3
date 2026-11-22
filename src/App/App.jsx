import { Fragment } from 'react';
import './App.css';
import User from '../Components/User';
import Task from '../Components/Task';
import Users from '../Components/Users';

function App() {
  var fname = "ahmed";
  var h1Style = {
    backgroundColor:"red"
  }
  return (
    <>
      {/* <User></User> */}
      {/* <User/>
      <Task></Task> */}
      <Users></Users>
    </>
  );
}

var styles = {
  h1Style: {
    backgroundColor:"red",
    color:"white"
  },
  divStyle: {
    backgroundColor:"orange",
    color:"white"
  },
}

export default App;
