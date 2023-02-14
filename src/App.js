
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/controller/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
      <div>
        <button
          aria-label="Increment value"
          className='underline'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
