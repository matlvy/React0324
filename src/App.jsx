import { useState } from "react";
import { Counter } from "./components/common/counter/Counter";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
