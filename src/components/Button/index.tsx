import styles from './styles.module.scss'

export default function Button({ title }) {
  return <button className={styles.btn}>{title}</button>
}
