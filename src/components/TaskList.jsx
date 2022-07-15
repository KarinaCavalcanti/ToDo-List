import { Clipboard } from 'phosphor-react';
import { useState } from 'react';
import { Input } from './Input';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskList.module.css';

export function TaskList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const tasksCompleted = tasks.filter(task => task.isCompleted).length
  
  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, 
      { 
        id: uuidv4(), 
        content: newTask, 
        isCompleted: true
      }
    ])

    setNewTask('')
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Input 
        onSubmit={handleCreateNewTask}
        onChange={handleNewTaskChange}
        value={newTask}
      />
      <div className={styles.taskListInfos}>
        <p>
          Tarefas criadas
          <span>{tasks.length}</span>
        </p>
        <p>
          Tarefas concluídas
          <span>
            {`${tasksCompleted} de ${tasks.length}`}
          </span>
        </p>
      </div>
      <div className={styles.taskList}>

        {tasks.map(task => {
          return (
            <Task 
              key={task.id}
              id={task.id}
              isCompleted={task.isCompleted}
              content={task.content}
              onDeleteTask={deleteTask}
            />
          )
        })}

        {tasks.length === 0 &&
          <div className={styles.noTask}>
            <Clipboard size={56} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        }

      </div>
    </>
  );
}