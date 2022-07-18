import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ id, content, isCompleted, onDeleteTask, onCompleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCompleteTask() {
    onCompleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.divCheckbox}>
        <input
          type="checkbox"
          id={id}
          key={id}
          defaultChecked={isCompleted}
          onChange={handleCompleteTask}
        />
        <label
          htmlFor={id}
        >
          {content}
        </label>
      </div>
      <button
        title="Deletar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}