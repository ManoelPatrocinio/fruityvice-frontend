import { CardList } from "../Cards/CardList";
import * as C from "./styles";

export const Cart = () => {
    
  return (
    <C.Container>

      <h1>My Cart(3)</h1>

      <C.CardContent>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
      </C.CardContent>
    <footer id="cartFooter">

      <button id="btnClearCart">Clear cart</button>
      <div className="totalPrice"><h3>Total:</h3> <h4 className="cartPrice">US$ 15.5</h4></div>
      <button id="btnBuyNow">Buy Now</button>
    </footer>

    </C.Container>
  );
};
