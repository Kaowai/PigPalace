import { Menu } from 'antd'
import {HomeOutlined} from '@ant-design/icons'
export default function MenuList() {
  return (
    <Menu theme='dark'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>
    </Menu>
  )
}
