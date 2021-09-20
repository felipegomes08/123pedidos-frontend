import styles from './styles.module.scss'

export default function Button({ className, title }) {
  return (
    <div className={className}>
      <button className={styles.btn}>{title}</button>
    </div>
  )
}
