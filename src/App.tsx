import { Header } from './components/Header'
import { CreateInput } from './components/CreateInput';
import { NoTasks } from './components/NoTasks';
import { TasksHeader } from './components/TasksHeader';

import styles from './App.module.css';
import './global.css';
import { Task } from './types';
import { TaskItem } from './components/TaskItem';
import { useTodo } from './useTodo';


function App() {
  const { deleteTask, toggleTask, addTask, tasks } = useTodo();

  return (
    <div className={styles.wrapper} >
      <div className={styles.content}>
        <Header />
        <CreateInput onCreate={addTask} />
        <TasksHeader tasks={tasks} />
        {tasks.length === 0 ? <NoTasks /> : tasks.map((task, index) => <TaskItem task={task} onToggle={() => toggleTask(!task.done, index)} onDelete={() => deleteTask(index)} />)}
      </div>
    </div>
  )
}

export default App
