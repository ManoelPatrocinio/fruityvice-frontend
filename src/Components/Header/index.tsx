import React, { useState } from "react";
import fruityVice_logo from "../../assets/img/fruityVice_logo.svg"
import { Cart } from "../Cart";
import * as C from "./styles";

type Props = {
    setValue: any;
    value: string;
};


export const Header = ({  setValue, value }:Props) => {
  const [classShowSearch, setClassShowSearch] = useState("");
  const [classShowCart, setClassShowCart] = useState(false);

  return (
    <C.Container >
      <C.ItemHeaderContent >
      <i className="fas fa-search fa-flip-horizontal" onClick={classShowSearch === 'showFormSearch' ? ()=> setClassShowSearch("") : ()=> setClassShowSearch("showFormSearch")}></i>
        <div className={`formSearch ${classShowSearch}`}>
          <input
            type="search"
            className="inputSeach"
            placeholder="O que está buscando ?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </C.ItemHeaderContent>

      <C.ItemHeaderContent id="LogoTitle">
        <img src={fruityVice_logo} alt="fruityVice logo"/>
      </C.ItemHeaderContent>

      <C.ItemHeaderContent>
      <i className="fas fa-shopping-cart" onClick={classShowCart === true ? ()=> setClassShowCart(false) : ()=> setClassShowCart(true)}></i>    
      </C.ItemHeaderContent>
      {classShowCart &&  <Cart/>}
    </C.Container>
    )
}