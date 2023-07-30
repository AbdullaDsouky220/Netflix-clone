import React from "react";
import MovieItemList from '@/components/MovieItemList'
const MoviesList = ({ label, data }) => {
  return <div className="flex flex-col  gap-4 pt-8 px-16">
    <p className="text-white font-bold text-2xl">
    {label}

    </p>
    <div className="flex gap-8">
        {
            data?.map((movie)=>(
                <MovieItemList movie={movie} key={movie?._id }/>
            ))
        }
    </div>
    </div>;
};

export default MoviesList;
