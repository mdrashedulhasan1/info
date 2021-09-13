import logo from './logo.svg';
import './App.css';

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
        <Person info = {info[0]}></Person>
        <Person info = {info[1]}></Person>
        <Person info = {info[2]}></Person>
        <Person info = {info[3]}></Person>
        <Person info = {info[4]}></Person>
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

export default App;
