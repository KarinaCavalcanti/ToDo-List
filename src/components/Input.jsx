import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css';

export function Input() {
  return (
    <form
      className={styles.form}
    >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}