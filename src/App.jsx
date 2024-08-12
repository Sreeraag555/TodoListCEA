import { useState } from 'react';
import './App.css'
import List from './List.jsx'

function App() {
  const [todo,setTodo]=useState('');
  const [tasks,setTasks]=useState([]);


  const changeHandler=e=>{
    setTodo(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
   
    const newTasks =[...tasks,todo]
    setTasks(newTasks)
    
    setTodo('')

  }
  
const deleteHandler=indexvalue=>{
  const newTasks= tasks.filter((task,index)=> index!=indexvalue)
  setTasks(newTasks);
}
  return (
    <>
    <div className='random'>
    <div className='box'>
      <h1>ToDo List </h1>
      <div>
        <form onSubmit={submitHandler} className='form'>
          <input type='text' placeholder='Enter a ToDo' value={todo} onChange={changeHandler} className='text'/>&nbsp;&nbsp;
          <input type='submit'  value='Enter' className='add'/>
        </form>
        <List taskslist={tasks} deleteHandler={deleteHandler}/>

      </div>
    </div>
    </div>

    </>
  )
}

export default App
