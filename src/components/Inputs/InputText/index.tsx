import styles from './styles.module.scss'

export interface InputTextProps {
  placeholder?: string
  className: string
  subtitle?: string
}

export default function InputText({ placeholder, className, subtitle }: InputTextProps) {
  return (
    <div className={className}>
      <p className={styles.sub}>{subtitle}</p>
      <input type='text' className={styles.textInput} placeholder={placeholder} />
    </div>
  )
}
