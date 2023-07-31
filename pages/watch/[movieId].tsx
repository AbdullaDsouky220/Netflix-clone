import React from 'react';
import { useRouter } from 'next/router';
import useMovie from '../../hooks/useMovie';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie( );
  
  return (
    <>
    <div className="h-screen w-screen bg-black">
    <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
    <div   
onClick={() => router.push('/')}
className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" >
<svg 
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
<p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">
          Watching:</span> {data?.title}
        </p>
      </nav>
      <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
      </div>
      </>
      )
}

export default Watch;