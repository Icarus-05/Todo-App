import { React, Fragment} from "react";
import './App.css';


//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  return (
    <Fragment>
      <div className="container">
      <TodoInput />
      <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
