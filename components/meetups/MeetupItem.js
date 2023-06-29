import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { Router, useRouter } from 'next/router';

function MeetupItem(props) {

  const route =useRouter();

  function Showdetails(id){
    route.push(`/${id}`)

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
          
          <button onClick={()=>Showdetails(props.id)}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
