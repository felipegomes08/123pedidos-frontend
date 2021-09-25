import { Container, Card } from 'src/components'
import styles from 'src/styles/pages/promocoes.module.scss'

export default function Home() {
  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>Promoções</h1>
        <p className={styles.subtitle}>
          Dê descontos exclusivos para seus clientes, os cupons serão distribuidos em seu
          cardápio online.
        </p>
        <div className={styles.rowCard}>
          <Card
            title='Crie sua primeira promoção de Frete Grátis'
            description='É muito simples criar sua pópria promoção, você pode começar agora mesmo.'
            titleButton='Criar promoção'
            type='solid'
          />
          <Card
            title='Crie seu primeiro Cupom de Desconto'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
            type='solid'
          />
        </div>
        <div>
          <Card
            title='Desconto para combos'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
          />
          <Card
            title='Desconto para combos'
            description='É muito simples criar seu próprio cupom de desconto, você pode começar agora mesmo.'
            titleButton='Criar cupom'
          />
        </div>
      </div>
    </Container>
  )
}
