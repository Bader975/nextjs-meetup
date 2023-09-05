import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-conrext'
import MeetupList from '../../components/meetups/MeetupList';

export default function Favorites() {

  const favoritesCtx=useContext(FavoritesContext);

//   if (typeof window !== 'undefined') {
//   localStorage.setItem("Favorites",favoritesCtx.favorites)
// }
// const favoritesLocal=localStorage.getItem("Favorites")
//   console.log(JSON.stringify({favoritesLocal}));
  // console.log(JSON.parse(favoritesLocal));

  return (
    <section>
    <h1>My favorites</h1>
    {favoritesCtx.totalFavorites==0 && <p>You have no favorites Please Add Some </p>}
   {favoritesCtx.totalFavorites>0 && <MeetupList meetups={favoritesCtx.favorites}/>}
    </section>
  )
}
