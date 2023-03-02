//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/contact" element={<Contact></Contact>}> </Route>
          </Routes>
     </Router> 
    </div>
  );
}

export default App;
