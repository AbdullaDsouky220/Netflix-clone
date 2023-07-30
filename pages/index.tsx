import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react';
import useMovies from '../hooks/useMovies'
import useFavorites from '../hooks/useFavorites'
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
  const {data:favorites}=useFavorites()


  return (
    <main  className=' w-screen'  >
      <Navbar />
      <Billboard/>
      <MoviesList label={'Trending Now'} data={data}/>
      <MoviesList label={'My List'} data={favorites}/>

    </main>
  )
}
