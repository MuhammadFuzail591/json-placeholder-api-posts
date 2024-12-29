// import { useRouter } from 'next/router'
import Link from 'next/link'
import Card from './_components/Card'

type post = {
  id: number
  title: string
  body: string
}

export default async function Home () {
  let posts: post[] = []

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await res.json()
  } catch (error) {
    console.log(error)
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20'>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`post/${post.id}`}>
            <Card id={post.id} title={post.title} body={post.body} />
          </Link>
        </div>
      ))}
    </div>
  )
}
