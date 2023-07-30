import Image from "next/image";
import React from "react";

const MovieItemList = ({ movie }) => {
  return (
    <div className="flex group relative flex-row mr-72  gap-5">
      <img
        src={movie?.thumbnailUrl}
        className="h-[160px] flex group-hover:hidden transition delay-75 cursor-pointer object-cover w-[230px]"
        alt="image"
      />
   <div className=" rounded group-hover:bg-red-400 
   hidden group-hover:flex
   absolute bg-zinc-900 w-[400px] -top-[120px] -left-8 pb-3 m-4">
        <div className=" rounded-t">
          <img
            src={movie?.thumbnailUrl}
            className="h-[160px]  rounded-t cursor-pointer bg-center   object-cover "
            alt="image"
          />
        </div>

        <div>
          <div className="flex flex-row mt-4 justify-between items-center ">
            <div className="flex flex-row gap-4 px-4 items-center ">
              <span className="bg-white cursor-pointer rounded-full p-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="bg-zinc-900 cursor-pointer border-slate-400 border-2 text-white rounded-full p-2 text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              </span>
              <span className="bg-zinc-900 cursor-pointer border-slate-400 border-2 text-white rounded-full p-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              </span>
           <span  className="bg-zinc-900 ml-5 cursor-pointer border-slate-400 border-2 p-2 text-white rounded-full  text-3xl">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
</svg>

           </span>
            </div>
           
          </div>
          <div className="text-white pl-4 pt-4">
                {movie.duration}
            </div>
          <div className="text-white pl-4 pt-2 text-xl">
                {movie.genre}
            </div>
        </div>
      </div>
   
    </div>
  );
};

export default MovieItemList;
