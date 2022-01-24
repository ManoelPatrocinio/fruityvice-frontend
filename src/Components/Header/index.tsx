import React, { useState } from "react";
import fruityVice_logo from "../../assets/img/fruityVice_logo.svg"
import * as C from "./styles";

type Props = {
    setValue: any;
    value: string;
    setCard:any;
    ShowCartValue:boolean
};


export const Header = ({  setValue, value,setCard,ShowCartValue }:Props) => {
  const [classShowSearch, setClassShowSearch] = useState("");

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
      <i className="fas fa-shopping-cart" onClick={ShowCartValue === true ? ()=> setCard(false) : ()=> setCard(true)}></i>    
      </C.ItemHeaderContent>
    </C.Container>
    )
}