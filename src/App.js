
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/controller/counterSlice'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './components/test';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App flex w-screen">
     
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/test' element={<Gallery/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
