import { Clipboard } from 'phosphor-react';
import { Task } from './Task';
import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <>
      <div className={styles.taskListInfos}>
        <p>
          Tarefas criadas
          <span>0</span>
        </p>
        <p>
          Tarefas concluídas
          <span>0</span>
        </p>
      </div>
      <div className={styles.taskList}>
        <Task />
        <Task />
        {/* <div className={styles.noTask}>
          <Clipboard size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> */}
      </div>
    </>
  );
}