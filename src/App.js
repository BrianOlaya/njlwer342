import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

const App = () => {

  const [listTasks, updateTasks] = useState({
    task: ''
  })


  const [allTasks, saveTask]=useState(['Sacar la ropa', 'Hacer la cama', 'Leer un rato'])


  const handleChange = (e) => {
    updateTasks({

      [e.target.name]: e.target.value
    })
  }


  const addTask = task => {
     saveTask([
       ...allTasks,
       task
     ])
  }

  const { task } = listTasks;
  
  const handleSubmit = e => {
    e.preventDefault();
   
    addTask(task)

    updateTasks({
      task:''
    })
  }



  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {allTasks.map(task=>(
              <li>{task}</li>
            )) }
        </ul>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="task"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={task}
            onChange={handleChange}

          />
        </form>
      </div>
    </div>
  )

}


export default App;
