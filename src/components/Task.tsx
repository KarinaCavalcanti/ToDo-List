import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.taskCard}>
      <div className={styles.container}>
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit officia nemo consequatur saepe! Assumenda magnam, facilis qui, quo illo iure, molestiae aliquid facere in eos quam quia dolorem.
        </label>
      </div>
      <button
        className={styles.button}
        title="Deletar tarefa"
      >
        <Trash size={20} />
      </button>
    </div>
  )
}