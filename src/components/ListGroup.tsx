import { MouseEvent, useState } from "react";
import bookCover from "../resources/bookcover.jpeg";

interface ListGroupProps {
  items: string[];
  heading: string;
  style: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({
  items,
  heading,
  style = "categoryRow",
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {items.length === 0 && <p>No item found</p>}
      <ul className={style}>
        <h1>{heading}</h1>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <button className="bookButton">
              {<img className="bookImg" src={bookCover}></img>}
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
