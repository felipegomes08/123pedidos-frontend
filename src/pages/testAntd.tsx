import { CiCircleFilled } from '@ant-design/icons'
import { Button, Space, DatePicker, Card, Steps } from 'antd'

const { Step } = Steps

export default function Home() {
  const onChange = test => {
    if (test === 'true') {
      console.log('onChange')
    }
  }

  return (
    <div style={{ padding: 100 }}>
      <Space direction='vertical'>
        <Button type='primary'>Primary Button</Button>
        <Button type='ghost'>Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <Card />
        <CiCircleFilled />
        <Steps current={1}>
          <Step title='Finished' description='This is a description.' />
          <Step
            title='In Progress'
            subTitle='Left 00:00:08'
            description='This is a description.'
          />
          <Step title='Waiting' description='This is a description.' />
        </Steps>
      </Space>
    </div>
  )
}
