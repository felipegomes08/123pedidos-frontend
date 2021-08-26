import { Button } from 'src/components'

import styles from './styles.module.scss'

export default function Card({ title, description, titleButton }) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button title={titleButton} />
    </div>
  )
}
