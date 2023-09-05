import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { Router, useRouter } from "next/router";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-conrext";

function MeetupItem(props) {
  // useRouter
  const router = useRouter();
  // useContext
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.isItemFavorite(props.id);

  function Showdetails(id) {
    router.push(`/${id}`);
  }

  function toggleFavoritesStatus() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={() => Showdetails(props.id)}>Show Details</button>

          <button onClick={toggleFavoritesStatus}>
            {itemIsFavorite ? (
              <i
              className="fa-solid fa-star"
                style={{ color: "#d1c382", margin: "5px" }}
              >
                {" "}
                {/* Remove From Favorites */}
              </i>
            ) : (
              <i
              className="fa-regular fa-star"
                style={{ color: "#d1c382", margin: "5px" }}
              >
                
                {/* Add To Favorites */}
              </i>
            )}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
