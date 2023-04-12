import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
 

function App() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/signin" Component={Signin} exact />
      </Routes>
     
       
    </Router>
    
  );
}

export default App;
