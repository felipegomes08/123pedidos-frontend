import { Button } from 'src/components'

import styles from './styles.module.scss'

export interface CardProps {
  title: string
  description: string
  titleButton: string
  type?: string
}

export default function Card({ title, description, titleButton, type }: CardProps) {
  return (
    <div className={type === 'solid' ? styles.cardSolid : styles.cardOutline}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button title={titleButton} />
    </div>
  )
}
