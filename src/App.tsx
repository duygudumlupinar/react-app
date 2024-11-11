import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = [
    "Harry Potter",
    "Shadow and Bone",
    "Crime and Punishment",
    "Normal People",
    "Pride and Prejudice",
  ];

  let movies = ["Crime and Punishment", "Harry Potter"];

  let series = ["Normal People", "Shadow and Bone"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleSearchClick = () => {
    setAlertVisibility(true);
  };

  return (
    <>
      <Button onClick={handleSearchClick}>Search</Button>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
        )}
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Books"
          onSelectItem={handleSelectedItem}
        />
      </div>
      <div>
        <ListGroup
          items={movies}
          heading="Movie Adaptations"
          onSelectItem={handleSelectedItem}
        />
      </div>
      <div>
        <ListGroup
          items={series}
          heading="TV Show Adaptations"
          onSelectItem={handleSelectedItem}
        />
      </div>
    </>
  );
}

export default App;
