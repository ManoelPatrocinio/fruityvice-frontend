import { CardList } from "../Cards/CardList";
import { Fruit } from "../../types/fruit";
import {useState, useEffect} from "react"
import * as C from "./styles";
type Props = {
  productsOnCard: Fruit[];
  setProdCard:any;

};
export const Cart = ({productsOnCard,setProdCard}:Props) => {
  const [idRemoveProd, setIdRemoveProd] = useState<number>();
  const remove = ()=>{
    
    try {
      const productAlreadyInCart = productsOnCard.some( product => product.id === idRemoveProd)
      
      if(productAlreadyInCart){
        const CartUpdated = productsOnCard.filter( product => product.id !== idRemoveProd)
        setProdCard(CartUpdated)
      }else{
        console.error("erro ao remover")
      }
      
    } catch (error) {
      console.error("erro ao adicionar no card:",error)
    }
    
  }
  
  
    useEffect(()=>{
      remove()
    },[idRemoveProd])
  return (
    <C.Container>

      <h1>My Cart(3)</h1>

      <C.CardContent>
        { productsOnCard.map((product, index) => (
                <CardList key={index} item={product} removeById={setIdRemoveProd}/>
        ))}
      </C.CardContent>
    <footer id="cartFooter">

      <button id="btnClearCart" onClick={()=>{setProdCard([])}}>Clear cart</button>
      <div className="totalPrice"><h3>Total:</h3> <h4 className="cartPrice">US$ 15.5</h4></div>
      <button id="btnBuyNow">Buy Now</button>
    </footer>

    </C.Container>
  );
};
