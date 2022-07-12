import { ClipboardText } from 'phosphor-react';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.divContainer}>
      <div className={styles.divTasksInfo}>
        <p>
          Tarefas criadas
          <span>0</span>
        </p>
        <p>
          Tarefas concluídas
          <span>0</span>
        </p>
      </div>
      <div className={styles.divTasksList}>
        <div className={styles.divNoTasks}>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  )
} 