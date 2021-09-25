import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Container,
  InputText,
  RadioGroup,
  ComboBox,
  DatePick,
  Button,
} from 'src/components'
import styles from 'src/styles/pages/cupom.module.scss'

export default function Cupom() {
  return (
    <Container
      footer={
        <div className={styles.footer}>
          <div className={styles.dica}>
            <ExclamationCircleOutlined
              className={styles.icon}
              style={{ fontSize: '28px', color: 'red' }}
            />
            <h3 className={styles.description}>
              <span className={styles.letterRed}>Dica!</span> Crie seu cupom e divulgue
              nas suas redes sociais
            </h3>
          </div>
          <div className={styles.divBtn}>
            <Button className={styles.btn} title='Avançar' />
          </div>
        </div>
      }
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.letterRed}>Primeiro passo</span> para criar seu cupom
          </h1>
          <p className={styles.description}>
            Dê descontos exclusivos para seus clientes, os cupons serão distribuídos em
            seu cardápio online.
          </p>
        </div>
        <div className={styles.contain}>
          <p className={styles.label}>Nome do cupom</p>
          <InputText className={styles.inputContainer} placeholder='Delivery5' />
          <div className={styles.groupContainer}>
            <RadioGroup
              label='Porcentagem do desconto'
              data={[
                { label: '5%', value: 1 },
                { label: '10%', value: 2 },
                { label: '15%', value: 3 },
                { label: '20%', value: 4 },
              ]}
            />
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.groupDates1}>
              <InputText
                subtitle='Compra mínima'
                className={styles.shortInput}
                placeholder='Delivery5'
              />
            </div>
            <div className={styles.groupDates2}>
              <ComboBox
                options={[
                  { label: '5%', value: 1 },
                  { label: '10%', value: 2 },
                  { label: '15%', value: 3 },
                  { label: '20%', value: 4 },
                ]}
                subtitle='Condição'
                placeholder='Delivery'
                className={styles.comboInput}
              />
            </div>
            <div className={styles.groupDates3}>
              <DatePick subtitle='Data de Início' className={styles.dateInput} />
            </div>
            <div className={styles.groupDates4}>
              <DatePick subtitle='Data de Término' className={styles.dateInput} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
