import "./App.css";
import NavBar from "./components/header/navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/home";
import ProdectPage from "./pages/productPage/productPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/LoginPage/loginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/home" component={HomePage} />{" "}
        <Route exact path="/product" component={ProdectPage} />{" "}
        <Route exact path="/about" component={AboutPage} />{" "}
        <Route exact path="/contact" component={ContactPage} />{" "}
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
