import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <TaskList />
      </main>
    </div>
  );
}
