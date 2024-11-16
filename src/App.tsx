import { useState } from "react";
import "./App.css";

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import PromoArea from "./components/PromoArea";
import CategoryArea from "./components/CategoryArea";
import ProductsArea from "./components/ProductsArea";
import Menu from "./components/Menu";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let books = [
    "Harry Potter",
    "Shadow and Bone",
    "Crime and Punishment",
    "Normal People",
    "Pride and Prejudice",
  ];

  let categories = ["Fantasy", "Romance", "Non-Fiction", "Mystery"];

  //The promotion book is selected randomly from all the books
  //to be displayed on the Promotion Area of the page.
  let i = Math.floor(Math.random() * books.length);
  let promoBook = books[i];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleSearchClick = () => {
    setAlertVisibility(true);
  };

  return (
    <>
      <Menu handleSearchClick={handleSearchClick} />

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            No matching items.
          </Alert>
        )}
      </div>

      <PromoArea book={promoBook} />
      <CategoryArea categories={categories} />
      <ProductsArea products={books} />

      <div>
        <ListGroup
          items={books}
          heading="Books"
          onSelectItem={handleSelectedItem}
        />
      </div>
    </>
  );
}

export default App;
