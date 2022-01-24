import * as C from "./styles";
import prodImg from "../../../assets/img/cherry.png";
import { Fruit } from "../../../types/fruit";
type Props = {
  item: Fruit;
  removeById:any;
};

 export const CardList = ({item,removeById}:Props) => {
    
  return (
    <C.Container>
      <div className="imgWrapper"> <img src={prodImg} alt="fruit"/></div>
      <div className="description">
        <article className="prodInfo">
          <h1 className="prodTitle">{item.name}</h1>
          <h2 className="prodPrice">US$ <span>5.03</span> /100g</h2>
        </article>
          <input type="number" min={1} max={15} step={1} />
          <button className="btnRemoveToCart" onClick={()=>{removeById(item.id)}}> - </button>
      </div>
    </C.Container>
  );
};
