
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/screens/Contact";
import About from "./components/screens/About";
import Home from "./components/screens/Home";
import Users from "./components/screens/Users";
import User from "./components/screens/User";
import Nav from "./components/screens/includes/Nav";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
