import { Sidebar, Card } from 'src/components'
import styles from 'src/styles/pages/promocoes.module.scss'

export default function Home() {
  return (
    <Sidebar>
      <div className={styles.container}>
        <h1>Promoções</h1>
        <p>
          Dê descontos exclusivos para seus clientes, os cupons serão distribuidos em seu
          cardápio online.
        </p>
        <div className={styles.rowCard}>
          <Card
            title='Crie sua primeira promoção de Frete Grátis'
            description='É muito simples criar sua pópria promoção, você pode começar agora mesmo.'
            titleButton='Criar promoção'
          />
          <Card
            title='Crie seu primeiro Cupom de Desconto'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
          />
        </div>
        <div>
          <Card
            title='Crie seu primeiro Cupom de Desconto'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
          />
          <Card
            title='Crie seu primeiro Cupom de Desconto'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
          />
        </div>
      </div>
    </Sidebar>
  )
}
