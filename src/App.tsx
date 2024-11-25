import { useState } from "react";
import "./App.css";

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import PromoArea from "./components/PromoArea";
import CategoryArea from "./components/CategoryArea";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Books from "./data/db.json";

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

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            No matching items.
          </Alert>
        )}
      </div>

      <PromoArea
        title={promoBook.title}
        author={promoBook.author}
        description={promoBook.description}
      />
      <CategoryArea categories={categories} />

      <div>
        <ListGroup
          items={Books}
          heading="What We Recommend"
          onSelectItem={handleSelectedItem}
          style="categoryRow"
        />
      </div>

      <div>
        <ListGroup
          items={Books}
          heading="Top Sellers"
          onSelectItem={handleSelectedItem}
          style="categoryRowAlt"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
