import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import "./App.css";
import myImage from "./resources/bookcover.jpeg";
import * as MaterialDesign from "react-icons/md";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let books = [
    "Harry Potter",
    "Shadow and Bone",
    "Crime and Punishment",
    "Normal People",
    "Pride and Prejudice",
  ];

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
      <div className="menuDiv">
        <button className="icon">
          <MaterialDesign.MdMenu size={40} />
        </button>
        <span className="searchBar">
          <input type="text" className="text" placeholder="Search..."></input>
          <button className="icon" onClick={handleSearchClick}>
            <MaterialDesign.MdSearch size={30} />
          </button>
        </span>
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            No matching items.
          </Alert>
        )}
      </div>
      <div className={"promoRow"}>
        <div>
          <img className="promoImg" src={myImage}></img>
        </div>
        <div className="descriptionText">
          <p className="promoText">
            Explanation: "The most enjoyable novel of the year for sure. - New
            York Times"
          </p>
          <Button onClick={() => console.log("")}>Add To Wishlist</Button>
        </div>
      </div>
      <div className="categoryRow">
        <button className="categoryButton">Fantasy</button>
        <button className="categoryButton">Romance</button>
        <button className="categoryButton">Non-Fiction</button>
        <button className="categoryButton">Mystery</button>
        <button className="categoryButton">Mystery</button>
      </div>
      {/* <div>
        <ListGroup
          items={books}
          heading="Books"
          onSelectItem={handleSelectedItem}
        />
      </div> */}
    </>
  );
}

export default App;
