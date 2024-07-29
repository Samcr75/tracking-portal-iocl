import logo from "./logo.svg";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import KilamForm from "./components/Form/KilamForm";
import MambaForm from "./components/Form/FormTest";
import Router from "./Router";

function App() {
  return (
    <div className="App min-h-screen h-full">
      <Router />
    </div>
  );
}

export default App;
