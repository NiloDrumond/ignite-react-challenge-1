import logo from '../assets/Logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
    <header>
      <img alt="logotipo todo" src={logo} />
    </header>
    </div>
  )

}
