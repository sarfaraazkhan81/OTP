import react from "react";
import AllRoutes from "../AllRoutes";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>this is my new step</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>addBy 10x</button>
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
