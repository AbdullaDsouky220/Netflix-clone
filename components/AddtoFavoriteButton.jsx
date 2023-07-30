import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/useCurrentUser";
import React, { useCallback, useMemo } from "react";
import axios from "axios";

const AddtoFavoriteButton = ({movieId}) => {
    const { mutate: mutateFavorites } = useFavorites();

    const { data: currentUser, mutate } = useCurrentUser();
  
    const isFavorite = useMemo(() => {
      const list = currentUser?.favoriteIds || [];
  
      return list.includes(movieId);
    }, [currentUser, movieId]);
  
    const toggleFavorites = useCallback(async () => {
      let response;
  
      if (isFavorite) {
        response = await axios.delete('/api/favorite', { data: { movieId } });
      } else {
        response = await axios.post('/api/favorite', { movieId });
      }
  
      const updatedFavoriteIds = response?.data?.favoriteIds;
  
      mutate({ 
        ...currentUser, 
        favoriteIds: updatedFavoriteIds,
      });
      mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);
  

    const icon=isFavorite?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-8 h-8">
    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
  </svg>:<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
  
  return (
    <div 
    
    onClick={toggleFavorites}>
      {" "}
      <span className=" bg-zinc-900 group text-white h-10  rounded-full cursor-pointer  p-2 items-center text-4xl border-2 border-neutral-400 w-10 flex">
      {icon}
      </span>
    </div>
  );
};

export default AddtoFavoriteButton;
