import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import FavoritesContext from "../../store/favorites-conrext";
function MainNavigation() {

  const favoritesCtx= useContext(FavoritesContext)
 const totalFavorites= favoritesCtx.totalFavorites
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link href="/favorites">My Favorites {totalFavorites}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
