import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post"

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/brunoocrv.png',
        name: 'Bruno Carvalho',
        role: 'Frontend Developer'
      },
      content: [
        {
          type: 'parapraph',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          type: 'parapraph',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          type: 'link',
          content: 'bruno.com',
        }
      ],
      publishedAt: new Date('2022-11-01 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'Developer'
      },
      content: [
        {
          type: 'parapraph',
          content: 'Uushdguashughsaughaushguhasudghsa',
        },
        {
          type: 'parapraph',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          type: 'link',
          content: 'diego.com',
        }
      ],
      publishedAt: new Date('2022-11-03 19:30:00')
    }
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              author={post.author}
              content={post.content}
              date={post.publishedAt}
              key={post.id}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
