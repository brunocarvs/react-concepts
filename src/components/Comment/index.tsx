import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from '../Avatar'

import './styles.css'

interface IComment {
  content: string;
  deleteComment: (content: string) => void;
  // author: {
  //   avatarUrl: string;
  //   name: string;
  //   role: string;
  // }
}

export function Comment({ content, deleteComment }: IComment) {
  const [likes, setLikes] = useState(0)

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
            <button title='Deletar comentário' onClick={() => deleteComment(content)}>
              <Trash />
            </button>
          </header>
          <p>{content}</p>
        </div> 
        <footer>
          <button onClick={() => setLikes(state => state + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}