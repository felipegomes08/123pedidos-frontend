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
      <Avatar
        size={85}
        className={styles.avatar}
        src='https://www.w3schools.com/howto/img_avatar.png'
      />
      <div className={styles.menu}>
        <a className={styles.button}>
          <AppstoreOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <TagsOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <FileTextOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <BellOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <WhatsAppOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <SettingOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
        <a className={styles.button}>
          <UserOutlined
            style={{ fontSize: '20px', color: 'gray' }}
            className={styles.icon}
          />
        </a>
      </div>
    </Col>
  )
}
