import clipboard from '../assets/Clipboard.svg';

import styles from './NoTasks.module.css';

export function NoTasks() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Lista vazia" />
      <p className={styles.message}><span>Você ainda não tem tarefas cadastradas</span><br/>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
