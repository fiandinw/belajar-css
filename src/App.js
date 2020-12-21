import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './komponen/Banner';
import Navbar from './komponen/Navbar';
import Pengenalan from './komponen/Pengenalan';
import Playground from './komponen/Playground';
import Sintaks from './komponen/Sintaks';
import Textstyle from './komponen/Textstyle';
import './w3.css';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner />
        </Route>
        <Route path="/pengenalan">
          <Pengenalan />
        </Route>
        <Route path="/sintaks">
          <Sintaks />
        </Route>
        <Route path="/textstyle">
          <Textstyle />
        </Route>
        <Route path="/gridlayout">
          <Playground />
        </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
