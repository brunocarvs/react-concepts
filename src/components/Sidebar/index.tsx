import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

import './styles.css'

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img
        className='cover'
        src="https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className='profile'>
        <Avatar src="https://avatars.githubusercontent.com/u/102631946?v=4"/>
        <strong>Bruno Carvalho</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}