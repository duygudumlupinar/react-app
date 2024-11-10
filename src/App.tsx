import ListGroup from "./components/ListGroup";

function App() {
  let items = ["a", "b"];

  return (
    <div>
      <ListGroup items={items} heading="Books" />
    </div>
  );
}

export default App;
