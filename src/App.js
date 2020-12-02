import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
