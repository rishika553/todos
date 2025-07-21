import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import React,{useState , useEffect} from 'react';
import AddTodo from './Mycomponents/AddTodo'; 
import { cleanup } from '@testing-library/react';
import {About } from "./Mycomponents/About";



function App() {
  let initTodo;
 if( localStorage.getItem("todos")=== null){
  initTodo = []
 }
 else{
  initTodo=JSON.parse(localStorage.setItem("todos"))
 }


  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo);
    
   // Deleting this way in react does not work
   // let index = todos.indexOf(todo);
   //todos.splice(index,1);

   setTodos(todos.filter((e)=>{
    return e!== todo;
   }))
   
  localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo =(title ,  desc) => {
    console.log("iam adding this todo", title,desc );
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
       sno = todos[todos.length-1].sno +1;
    
    }
    const myTodo= {
      sno:sno,
      title: title,
      desc : desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
  localStorage.getItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Header title = " My todo list " searchBar={true}/>
    <AddTodo addTodo={addTodo}/> 
    <Todos todos={todos} onDelete={onDelete}/>

    <Footer/>
</>



  );
}
export default App;
