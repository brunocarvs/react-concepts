import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import './styles.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

interface IPost {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  }
  content: IPostContent[];
  date: Date;
}

interface IPostContent {
  type: string;
  content: string;
}

interface IComment {
  content: string;
}

export function Post({ author, date, content }: IPost) {
  const [comments, setComments] = useState<IComment[]>([])
  const [commentText, setCommentText] = useState('')

  const formattedDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const handleComment = () => {
    event!.preventDefault()

    setComments([...comments, { content: commentText }])
    setCommentText('')
  }

  const handleDeleteComment = (comment: any) => {
    const commentsWithoutDeleted = comments.filter(element => element.content !== comment)

    setComments(commentsWithoutDeleted)
  }

  return (
    <article className='post'>
      <header>
        <div className='author'>
          <Avatar src={author.avatarUrl} />
          <div className='authorInfo'>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={date.toISOString()}
          title={formattedDate}
        >
          {
            formatDistanceToNow(date, {
              locale: ptBR,
              addSuffix: true,
            })
          }
        </time>
      </header>
      <div className='content'>
        {
          content.map(line => {
            switch (line.type) {
              case 'paragraph':
                return <p key={line.content}>{line.content}</p>
              case 'link':
                return <p key={line.content}><a href="#">{line.content}</a></p>
              default:
                break;
            }
          })
        }
      </div>
      <form className='comments' onSubmit={handleComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
          name='comment' 
          onChange={event => setCommentText(event.target.value)}
          value={commentText}
          required
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className='commentList'>
        {
          comments.map(comment => <Comment content={comment.content} key={comment.content} deleteComment={handleDeleteComment} />)
        }
      </div>
    </article>
  )
}