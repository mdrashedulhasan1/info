import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const info = [
    {name:"A", job:"Web Developer", salary:"$200"},
    {name:"B", job:"Web Designer", salary:"$100"},
    {name:"C", job:"Graphic Designer", salary:"$50"},
    {name:"D", job:"React Developer", salary:"$150"},
    {name:"E", job:"html Developer", salary:"$300"}
];
  
  return (
    <div className="App">
        <Users></Users>
        <Count></Count>
        {/* <Person info = {info[0]}></Person>
        <Person info = {info[1]}></Person>
        <Person info = {info[2]}></Person>
        <Person info = {info[3]}></Person>
        <Person info = {info[4]}></Person> */}
        {
          info.map(information => <Person info = {information}></Person>)
        }
    </div>
  );
}

function Person(props){
const tapu = {
    color:"red",
    backgroundColor:"green",
    padding:"10px",
    margin:"10px",
    border:"5px solid red"
  }

 const {name, job, salary} = props.info

  return <div style = {{border:"5px solid yellow", color:"red",
  backgroundColor:"green",
  padding:"10px",
  margin:"10px",}}>
  <h1>Name: {name}</h1>
  <h2>Job: {job}</h2>
  <h2>Salary: {salary}</h2>
  </div>
}

function Count(){
  const [value, setValue] = useState(10);
  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <button onClick={()=>setValue(value-1)}>Decrement</button>
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
  )
  return (
    <div>
          <h1>Total Users: {users.length}</h1>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>

          <ul>
            {
              users.map(user => <li>{user.email}</li>)
            }
          </ul>
    </div>
  )
}

export default App;
