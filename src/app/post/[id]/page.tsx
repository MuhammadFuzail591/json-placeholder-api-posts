// eslint-disable-next-line @typescript-eslint/no-explicit-any

type postPageProps = {
  params: {
    id: string
  }
}
type post = {
  id: number
  title: string
  body: string
}

export default async function PostPage ({ params }: postPageProps) {
  let newPost: post = { title: '', id: 0, body: '' }
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    newPost = await res.json()
  } catch (error) {
    console.log(error)
  }
  return (
    <section className='bg-gray-900 text-white w-full mt-10'>
      <div className='mx-auto max-w-full px-4 py-32 lg:flex lg:items-center'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            {newPost.title}
            <span className='sm:block'> Increase Conversion. </span>
          </h1>

          <p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed'>
            {newPost.body}
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            Post Id: {params.id}
          </div>
        </div>
      </div>
    </section>
  )
}
