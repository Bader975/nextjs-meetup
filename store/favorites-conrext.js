import { createContext, useState } from "react";

 const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetUpId) => {},
  isItemFavorite: (meetUpId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavorite = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  };

  const removeFavorite = (meetUpId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetUpId);
    });
  };

  const isItemFavorite = (meetUpId) => {
    return userFavorites.some((meetup) => meetup.id === meetUpId);
  };

//   Context in all App
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite,
    isItemFavorite:isItemFavorite
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;