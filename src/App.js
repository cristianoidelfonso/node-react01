import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Form from './pages/Form';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Header title="Node React" />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/contact' element={ <Form />}/>
          <Route path='/project' element={ <Project />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
