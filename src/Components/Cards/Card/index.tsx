import { useState } from "react";
import * as C from "./styles";
import prodImg from "../../../assets/img/cherry.png";

export const Card = () => {
  const [classShowCart, setClassShowCart] = useState("");
    
  return (
    <C.Container>
      <div className="imgWrapper"> <img src={prodImg} alt="fruit"/></div>
      <div className="description">
          <h1 className="prodTitle">Blueberry</h1>
          <h2 className="prodPrice">US$ <span>5.03</span> /100g</h2>
          <a id="linkCardNutritional" onClick={classShowCart === "showCardInfo" ? ()=> setClassShowCart("") : ()=> setClassShowCart("showCardInfo")} >Valor Nutricional</a>
          <button className="btnAddToCart"> Add to Cart</button>
      </div>
      <div className={`CardNutritional ${classShowCart}`} >
        <i className="fas fa-arrow-circle-down linkDown"  onClick={classShowCart === "showCardInfo" ? ()=> setClassShowCart("") : ()=> setClassShowCart("showCardInfo")} ></i>
        <h1 className="prodTitle">Blueberry</h1>
        <ul>
            <li><strong>Genus:</strong> Fragaria</li>
            <li><strong>Family:</strong> Rosaceae</li>
            <li><strong>Order:</strong> Rosales</li>
            <br/>
            <li id="subTitle"><strong>Nutritions</strong></li>
            <li className="group2"><strong>Carbohydrates:</strong>  5.5</li>
            <li className="group2"><strong>Protein:</strong>  0</li>
            <li className="group2"><strong>Fat:</strong>  0.4</li>
            <li className="group2"><strong>Calories:</strong>  29</li>
            <li className="group2"><strong>Sugar:</strong>  5.4</li>
        </ul>
          
      </div>
    </C.Container>
  );
};
