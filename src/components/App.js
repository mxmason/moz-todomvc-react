/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useState } from "react";
import nanoid from "nanoid";

import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => (
    <Todo {...task} deleteTask={deleteTask} editTask={editTask} key={task.id} />
  ));

  function addTask(name) {
    const newTask = { id: nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = taskList.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // reassign the task's name
        task.name = newName;
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
