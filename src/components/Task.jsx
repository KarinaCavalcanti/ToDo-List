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
      <label
        className={`${styles.container} ${isCompleted ? styles.completed : ""}`}
      >
        <input
          type="checkbox"
          key={id}
          defaultChecked={isCompleted}
          onChange={handleCompleteTask}
        />
        <span className={styles.checkmark}></span>
        {content}
      </label>
      <button
        title="Deletar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}