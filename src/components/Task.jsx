import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
        id="checkbox1" 
      />
      <label 
        htmlFor="checkbox1"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda porro magni sequi voluptatibus natus blanditiis id quam quos ducimus magnam tenetur, rem necessitatibus.
      </label>
      <button
        title="Deletar tarefa"
      >
        <Trash size={18} />
      </button>
    </div>
  );
}