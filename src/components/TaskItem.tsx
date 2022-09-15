import { FiTrash2 } from "react-icons/fi";
import { BiCheck } from 'react-icons/bi';
import { Task } from "../types";
import styles from './TaskItem.module.css'

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export function TaskItem({ task,onDelete, onToggle }: TaskItemProps) {
  return (
    <div className={styles.container}>
      <div onClick={onToggle} className={task.done ? styles.checked : styles.unchecked}>{task.done && <BiCheck />}</div>
      <p className={styles.text}>{task.text}</p>
      <button onClick={onDelete} className={styles.delete}><FiTrash2 /></button>
    </div>
  )
}
