import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = () => {

  const users = useSelector((state) => state.users);
  
  return (
 <div className={style.container}>
   {users.map((users) => {
        return (
          <Card
            id={users.id}
            name={users.name}
            username={users.username}
            email={users.email}
          />
        );
      })}
 </div>
  )
}
    
    export default CardsContainer;