import {createContext, useState,useEffect} from 'react';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({children}) => {
  const [mealsId, setID] = useState([]);

  const addFavourite = id => {
    //setting the state based on prevous state using spread operator :
    setID(prev => [...prev, id]);
  };
  const removeFavourite = id => {
    setID(prev => prev.filter(mealId => mealId !== id));
  };

  return <FavouriteContext.Provider value={{ids:mealsId,
    addFavourite,
    removeFavourite,}}>{children}</FavouriteContext.Provider>;
};
