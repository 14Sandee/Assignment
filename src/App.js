import './App.css';
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";
import Contact from './Contact';
import SortingTable from './components/SortingTable';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/second">
          <SortingTable />
        </Route>
        <Route path="/">
          <Contact />
        </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
