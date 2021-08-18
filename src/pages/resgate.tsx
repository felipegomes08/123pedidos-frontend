import { Sidebar } from 'src/components'
import styles from 'src/styles/pages/resgate.module.css'

export default function Home() {
  return (
    <Sidebar>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Parabéns! Seu cupom de desconto <br /> foi agendado com sucesso.
        </h1>
        <p className={styles.description}>
          Agora é só aguardar o ínicio do seu cupom e esperar pelos pedidos
        </p>
        <div className={styles.form}>
          <input className={styles.input} type='date' />
          <input className={styles.input} type='date' />
        </div>
        <button className={styles.button}>Voltar para o ínicio</button>
      </div>
    </Sidebar>
  )
}
