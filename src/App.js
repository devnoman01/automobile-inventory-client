import { Button } from "react-bootstrap";
import "./Styles/App.css";

function App() {
  return (
    <div className="App text-center">
      <h1 className="text-3xl mt-10 font-bold mx-auto text-center text-red-400 underline">
        Checking Tailwind
      </h1>
      <Button variant="warning">React Bootstrap Button</Button>
      <br />
      <button className="btn btn-success">Bootstrap Button</button>
    </div>
  );
}

export default App;
