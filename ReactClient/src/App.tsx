import "./styles/App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
