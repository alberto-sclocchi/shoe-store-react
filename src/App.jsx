import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AddShoe from './components/pages/AddShoe';
import Nav from './components/core/Nav';
import ShoeDetails from './components/pages/ShoeDetails';
import { ShoeProvider } from './components/shoes/context/ShoeContext.context';


function App() {
  return (
    <div className="App">
      <Nav/>
      <ShoeProvider>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add-shoe" element={<AddShoe/>} />
          <Route exact path="/:shoeId" element={<ShoeDetails/>} />
        </Routes>
      </ShoeProvider>
    </div>
  );
}

export default App;
