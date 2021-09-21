import {
  UserOutlined,
  AppstoreOutlined,
  TagsOutlined,
  BellOutlined,
  FileTextOutlined,
  WhatsAppOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Avatar, Col } from 'antd'

import styles from './styles.module.scss'

export default function Sidebar() {
  return (
    <Col flex='100px' className={styles.sidebar}>
      <Avatar size={85} icon={<UserOutlined />} className={styles.avatar} />
      <div className={styles.menu}>
        <AppstoreOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <TagsOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <FileTextOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <BellOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <WhatsAppOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <SettingOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
        <UserOutlined
          style={{ fontSize: '20px', color: 'gray' }}
          className={styles.icon}
        />
      </div>
    </Col>
  )
}
