import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Reels from './components/Reels';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/reel' element={<Reels/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
