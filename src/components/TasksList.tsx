import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { ClipboardText, PlusCircle } from 'phosphor-react';
import { Task } from './Task';

import styles from './TasksList.module.css';

export function TasksList() {
  const [tasks, setTasks] = useState([
    'Primeira task'
  ]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <form
        className={styles.divInput}
        onSubmit={handleCreateNewTask}
      >
        <input
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          disabled={isNewTaskEmpty}
        >
          Criar
          <PlusCircle
            size={16}
          />
        </button>
      </form>
      <div className={styles.divContainer}>
        <div className={styles.divTasksInfo}>
          <p>
            Tarefas criadas
            <span>{tasks.length}</span>
          </p>
          <p>
            Tarefas concluídas
            <span>0</span>
          </p>
        </div>
        <div>
          {tasks.map(task => {
            return (
              <Task 
                key={task} 
                content={task} 
                onDeleteTask={deleteTask}
              />
            )
          })}
          {tasks.length === 0 &&
            <div className={styles.divNoTasks}>
              <ClipboardText size={56} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
} 