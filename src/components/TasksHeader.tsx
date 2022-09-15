import { Task } from '../types';
import styles from './TasksHeader.module.css';

interface TasksHeaderProps {
  tasks: Task[];
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerItem}>
        <p className={styles.created}>Tarefas criadas</p>
        <div className={styles.counter}>{tasks.length}</div>
      </div>
      <div className={styles.headerItem}><p className={styles.done}>Concluídas</p>
        <div className={styles.counter}>{`${tasks.filter((task) => task.done).length} de ${tasks.length}`}</div>
      </div>
    </div>
  )
}
