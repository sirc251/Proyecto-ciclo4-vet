// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
