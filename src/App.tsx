import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "./countercontext";
import { TodoContext } from "./todocontext";

function App() {
  const ctx = useContext(TodoContext);
  const ctxCount = useContext(CounterContext);
  // const [todoItem, setTodoItem] = useState([
  //   {
  //     id: 1,
  //     name: "Name1",
  //     counter: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Name2",
  //     counter: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Name3",
  //     counter: 0,
  //   },
  // ]);
  const navigate = useNavigate();
  return (
    <>
      <div>home</div>
      {ctx.todoList.map((todo, idx) => {
        return (
          <div key={`div0${idx}`}>
            <div
              key={`div1${idx}`}
              style={{ border: "1px solid black", padding: "4px" }}
            >
              <span
                key={`span1${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                {todo.name}
              </span>
              <span
                key={`span2${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Votes
              </span>
              <button
                key={`button1${idx}`}
                onClick={() => ctxCount.counterIncrease(idx)}
              >
                +
              </button>
              <span key={`span3${idx}`}>{ctxCount.todoList[idx].vote}</span>
              <button
                key={`button2${idx}`}
                onClick={() => ctxCount.counterDecrease(idx)}
              >
                -
              </button>
              <button
                key={`button3${idx}`}
                style={{ marginLeft: "10px" }}
                onClick={() => navigate(`/detail/${todo.id}`)}
              >
                detail
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
