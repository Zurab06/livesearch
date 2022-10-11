import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { productData } from "./productData";

function App() {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input
        className="title"
        type="text"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="App">
        {productData
          .filter((item) => item.name.includes(search))
          .map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </>
  );
}

export default App;
