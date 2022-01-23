import * as C from "./styles";
import prodImg from "../../../assets/img/cherry.png";

export const CardList = () => {
    //let imgUri = "../../../assets/img/" + "cherry.png";
    
  return (
    <C.Container>
      <div className="imgWrapper"> <img src={prodImg} alt="fruit"/></div>
      <div className="description">
        <article className="prodInfo">
          <h1 className="prodTitle">Blueberry</h1>
          <h2 className="prodPrice">US$ <span>5.03</span> /100g</h2>
        </article>
          <input type="number" min={1} max={15} step={1} />
          <button className="btnRemoveToCart"> - </button>
      </div>
    </C.Container>
  );
};
