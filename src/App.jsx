import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <Input />
        <main>
          <TaskList />
        </main>
      </div>
    </div>
  );
}
