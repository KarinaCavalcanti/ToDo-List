import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css';

export function Input({ onSubmit, onChange, value }) {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        autoComplete="off"
        onChange={onChange}
        value={value}
        required
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