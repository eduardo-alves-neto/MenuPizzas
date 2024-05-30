import { Header } from "./components/Header";
import { Menu } from "./components/Menu/index";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
