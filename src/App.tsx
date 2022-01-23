import { useState } from "react";
import { Header } from "./Components/Header";
import * as C from "./App.styles";
import { Card } from "./Components/Cards/Card";

const App = () => {
  const [search, setSearch] = useState("");

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </C.CardContent>
      </C.Main>
    </C.Container>
  );
};

export default App;
