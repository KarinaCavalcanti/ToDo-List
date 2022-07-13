import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  content: string;
  onDeleteTask: (content: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.container}>
        <input 
          type="checkbox" 
          id="checkbox1" 
        />
        <label htmlFor="checkbox1">
          {content}
        </label>
      </div>
      <button
        className={styles.button}
        onClick={handleDeleteTask}
        title="Deletar tarefa"
      >
        <Trash size={20} />
      </button>
    </div>
  )
}