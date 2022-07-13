import { Task } from './Task';

import styles from './TasksList.module.css';

export function TasksList() {
  return (
    <div className={styles.divContainer}>
      <div className={styles.divTasksInfo}>
        <p>
          Tarefas criadas
          <span>1</span>
        </p>
        <p>
          Tarefas concluídas
          <span>0</span>
        </p>
      </div>
      <div>
        <Task />
        {/* <div className={styles.divNoTasks}>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> */}
      </div>
    </div>
  )
} 