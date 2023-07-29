import React from "react";
import useBillboard from "@/hooks/useBillboard";
const Billboard = () => {
  const { data: movie } = useBillboard();
  console.log(movie);
  return (
    <div className=" w-screen relative min-h-[80vh] -mt-[56px] ">
      <div className="w-screen    h-[50%]">
        <video
          src={movie?.videoUrl}
          poster={movie?.thumbnailUrl}
          muted
          className="w-screen max-h-[65%] "
          autoPlay
        />
      </div>
      <div className="absolute py-16 pl-8  lg:top-[15%] top-[10%] xl:top-[30%] flex flex-col gap-6">
        <h1
          className="text-white
              z-20 text-xl lg:text-4xl xl:text-5xl font-bold max-w-[70%] "
        >
          {movie?.title}
        </h1>
        <p
          className="text-slate-200
            lg:text-lg
              z-20 md:text-[11px]  xl:text-xl text-[8px]  max-w-[50%] "
        >
          {movie?.description}
        </p>
        <button className="bg-white flex  gap-1 items-center p-2 lg:px-6 lg:text-lg  bg-opacity-30 rounded  text-sm w-fit text-white hover:bg-opacity-40">
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>

          <span>more info</span>
        </button>
      </div>
    </div>
  );
};

export default Billboard;
