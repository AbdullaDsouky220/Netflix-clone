import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react';
import useMovies from '../hooks/useMovies'
import Navbar from '../components/Navbar'
import Billboard from '../components/Billboard'
import MoviesList from '../components/MoviesList'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  const {data}=useMovies()


  return (
    <main  className=' w-screen'  >
      <Navbar />
      <Billboard/>
      <MoviesList label={'Trending Now'} data={data}/>

    </main>
  )
}
