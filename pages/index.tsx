import { NextPageContext } from 'next'
import { getSession ,signOut} from 'next-auth/react';



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
  return (
    <main
      className="text-white text-3xl"
    >
      <h1>
        Hello world
      </h1>

    <button
    onClick={()=>signOut()}
    className="border rounded p-4 bg-green-400 my-4">
      Sign out
    </button>

    </main>
  )
}
