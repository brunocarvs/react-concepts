import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import './styles.css'

export function Post() {
  return (
    <article className='post'>
      <header>
        <div className='author'>
          <Avatar src="https://avatars.githubusercontent.com/u/102631946?v=4" />
          <div className='authorInfo'>
            <strong>Bruno Carvalho</strong>
            <span>Frontend Developer</span>
          </div>
        </div>
        <time 
          dateTime='2022-11-03 22:37:30'
          title='03 de novembro às 22:37'
        >
          Publicado há 1hr
        </time>
      </header>
      <div className='content'>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>Quisquam provident, praesentium laborum, eveniet repudiandae magni quidem esse error vero dicta molestias. </p>
          <p>Magni, nemo animi. Perspiciatis quasi non accusantium magnam vitae.</p>
        </p>
      </div>
      <form className='comments'>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className='commentList'>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}