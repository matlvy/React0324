import { useState } from "react";
import { Counter } from "./components/common/counter/Counter";
import NavBar from "./components/layout/navBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
