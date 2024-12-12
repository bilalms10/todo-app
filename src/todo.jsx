import './todo.css'
import { useState } from 'react';

function Todo() {
  const [task, setTask] = useState("");
  const [newtask, setNewtask] = useState([]);

  function TodoList() {
    setNewtask([...newtask, task]);
    setTask("");
  }

  function deleteTask(item) {
    setNewtask(newtask.filter((i) => i !== item));
  }

  function editTask(item) {
    setTask(item);
    deleteTask(item);
  }


  return (
    <div className="full">
      <div className="main">

        <div className='nav'>
          <h1 className="header">TO DO LIST</h1>
          <button className='taskbtn' onClick={TodoList}>ADD TASK</button>
          <input className='headinp'
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Type Task Here"
          />
          <select className="dropdown">
            <option className='dropdown'>Full Task</option>
            <option className='dropdown'>Completed</option>
            <option className='dropdow'>Task Pending</option>
          </select>
        </div>
        <div className='mid'>
          <ul className="list">
            {newtask.map((t, index) => (
              <li key={index} className="tasklist">

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input className="cb" type="checkbox" />
                  <h4 className="task">{t}</h4>
                </div>


                <div className="editdeletebtns">
                  <button className="deled" onClick={() => deleteTask(t)}>Delete</button>
                  <button className="deled" onClick={() => editTask(t)}>Edit</button>
                </div>
              </li>
            ))}
          </ul>


        </div>
      </div>


    </div>
  )

}
export default Todo;