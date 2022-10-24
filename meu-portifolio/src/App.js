import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import InitialPage from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ InitialPage } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
    </Switch>
  );
}

export default App;
