import {  useState } from "react";
import * as C from "./styles";
import { Fruit } from "../../../types/fruit";
import prodImg from "../../../assets/img/cherry.png";

type Props = {
  item: Fruit;
  addProdOnCard?:any;
  ProdOnCard:Fruit[]
};


export const Card = ({item,addProdOnCard,ProdOnCard}:Props) => {
  const [classShowCart, setClassShowCart] = useState("");
  let ProdQtd = 0;
  
  const add = (itemAdd:Fruit)=>{
    try {
      const productAlreadyInCart = ProdOnCard.find( product => product.id === itemAdd.id)
     
      if(!productAlreadyInCart){
        const newCart = ProdOnCard
        newCart.push(itemAdd)
        addProdOnCard([...newCart])
      }else{
        ProdQtd += 1;
      }
     
    } catch (error) {
      console.error("erro ao adicionar no card:",error)
    }
    
  }

  return (
    <C.Container>
      <div className="imgWrapper"> <img src={prodImg} alt="fruit"/></div>
      <div className="description">
          <h1 className="prodTitle">{item.name}</h1>
          <h2 className="prodPrice">US$ <span id="price">5.03</span> /100g</h2>
          <p id="linkCardNutritional" onClick={classShowCart === "showCardInfo" ? ()=> setClassShowCart("") : ()=> setClassShowCart("showCardInfo")} >Valor Nutricional</p>
          <button className="btnAddToCart" onClick={ ()=>{add(item)}}> Add to Cart</button>
      </div>
      <div className={`CardNutritional ${classShowCart}`} >
        <i className="fas fa-arrow-circle-down linkDown"  onClick={classShowCart === "showCardInfo" ? ()=> setClassShowCart("") : ()=> setClassShowCart("showCardInfo")} ></i>
        <h1 className="prodTitle">{item.name}</h1>
        <ul>
            <li><strong>Genus:</strong> {item.genus}</li>
            <li><strong>Family:</strong> {item.family}</li>
            <li><strong>Order:</strong> {item.order}</li>
            <br/>
            <li id="subTitle"><strong>Nutritions</strong></li>
            <li className="group2"><strong>Carbohydrates:</strong>  {item.nutritions.carbohydrates}</li>
            <li className="group2"><strong>Protein:</strong> {item.nutritions.protein}</li>
            <li className="group2"><strong>Fat:</strong>  {item.nutritions.fat}</li>
            <li className="group2"><strong>Calories:</strong> {item.nutritions.calories}</li>
            <li className="group2"><strong>Sugar:</strong>  {item.nutritions.sugar}</li>
        </ul>
          
      </div>
    </C.Container>
  );
};
