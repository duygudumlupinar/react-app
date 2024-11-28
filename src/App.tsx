import { useState } from "react";
import "@/App.css";
import Books from "@/data/db.json";
import {
  Alert,
  ListGroup,
  PromoArea,
  CategoryArea,
  Menu,
  Footer,
} from "@/components";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let categories = ["Fantasy", "Romance", "Non-Fiction", "Mystery"];

  //The promotion book is selected randomly from all the books
  //to be displayed on the Promotion Area of the page.
  let i = Math.floor(Math.random() * Books.length);
  let promoBook = Books[i];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleSearchClick = () => {
    setAlertVisibility(true);
  };

  return (
    <>
      <Menu handleSearchClick={handleSearchClick} />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          No matching items.
        </Alert>
      )}

      <PromoArea
        title={promoBook.title}
        author={promoBook.author}
        description={promoBook.description}
      />

      <CategoryArea categories={categories} />

      <ListGroup
        items={Books}
        heading="What We Recommend"
        onSelectItem={handleSelectedItem}
        style="categoryRow"
      />

      <ListGroup
        items={Books}
        heading="Top Sellers"
        onSelectItem={handleSelectedItem}
        style="categoryRowAlt"
      />

      <Footer />
    </>
  );
}

export default App;
