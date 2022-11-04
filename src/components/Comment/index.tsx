import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'

import './styles.css'

export function Comment() {
  return (
    <div className='comment'>
      <Avatar src="https://avatars.githubusercontent.com/u/102631946?v=4" hasBorder={false} />
      <div className='commentBox'>
        <div className='commentContent'>
          <header>
            <div className='author'>
              <strong>Bruno Carvalho</strong>
              <time 
                dateTime='2022-11-03 22:37:30'
                title='03 de novembro às 22:37'
              >
                Cerca de 1hr atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash />
            </button>
          </header>
          <p>CONTEUDO DO COMENTARIO</p>
        </div> 
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}