import { useState,useEffect } from "react";
import { Header } from "./Components/Header";
import * as C from "./App.styles";
import { Card } from "./Components/Cards/Card";
import {api} from "./services/api";
import {Fruit} from "./types/fruit"


const App = () => {
  const [search, setSearch] = useState("");
  const [produts, setProduts] = useState<Fruit[]>([])


  const getAll = async () =>{
    
     await api.get('/products').then((response) => setProduts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
      
  }

  const filterBySearch = () => {
    return produts.filter((produto) =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );
  };


  useEffect(()=>{
    getAll()
  },[])

  return (
    <C.Container>
      <Header setValue={setSearch} value={search} />

      <C.Main>
        <C.SectionTitle>
          <div className="titleLine"></div>
          <h2 id="sectionTitle">All fruits</h2>

          <div className="titleLine"></div>
        </C.SectionTitle>
        <C.CardContent>
    
          {filterBySearch().length > 0 ? (
                filterBySearch().map((produto, index) => (
                  <Card key={index} item={produto} />
                ))
              ) : (
                produts.map((product, index) => (
                  <Card key={index} item={product} />
                ))
              )}
     
        </C.CardContent>
      </C.Main>
    </C.Container>
  );
};

export default App;
