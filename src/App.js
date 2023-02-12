import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Library from "./components/pages/Library";
import Contact from "./components/pages/Contact";
import FormOne from "./components/FormOne";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/library" component={Library} />
          <Route path="/tdee" component={FormOne} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
