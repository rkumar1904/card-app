import { useSelector, useDispatch } from "react-redux";
import { increment } from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ margin: '50px' }}>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div >
  );
}
export default App;
