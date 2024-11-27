import { MouseEvent, useState } from "react";
import bookCover from "@/resources/bookcover.jpeg";
import * as MaterialDesign from "react-icons/md";
import Books from "@/data/db.json";

// Takes all information about products as an array
// the heading of the division and style of the division
// and the method to call as properties.
interface ListGroupProps {
  items: typeof Books;
  heading: string;
  style: string;
  onSelectItem: (item: string) => void;
}

// Displays products as a list.
function ListGroup({
  items,
  heading,
  style = "categoryRow",
  onSelectItem,
}: ListGroupProps) {
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {items.length === 0 && <p>No item found</p>}
      <ul className={style}>
        <h2>{heading}</h2>
        <button className="arrowButton">
          <MaterialDesign.MdArrowBack size={40} />
        </button>
        {items.map((book, index) => (
          <li
            key={book.id}
            onClick={() => {
              onSelectItem(book.id);
            }}
          >
            <button className="bookButton">
              {<img className="bookImg" src={bookCover}></img>}
              {book.title}
              <br></br>
              {book.author}
            </button>
          </li>
        ))}
        <button className="arrowButton">
          <MaterialDesign.MdArrowForward size={40} />
        </button>
      </ul>
    </>
  );
}

export default ListGroup;
