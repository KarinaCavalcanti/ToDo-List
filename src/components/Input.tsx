import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css';

export function Input() {
  return (
    <div
      className={styles.div}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <a href="#">
        Criar
        <PlusCircle
          size={16}
        />
      </a>
    </div>
  )
}