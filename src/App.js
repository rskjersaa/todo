import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';


function App() {


    const [todoList, setTodoList] = useState ([]);
    

  return (
    <div className="App">
      <Form todoList = {todoList} setTodoList = {setTodoList}/>
      <Display todolist = {todoList} setTodoList = {setTodoList}/>
    </div>
  );
}

export default App;
