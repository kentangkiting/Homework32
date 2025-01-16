import React, { createContext, FC, useEffect, useState } from "react";

// interface IProps {
//     children:
// }

export const CounterContext = createContext({
  todoList: [],
});

const CounterContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      vote: 0,
    },
    {
      id: 2,
      vote: 0,
    },
    {
      id: 3,
      vote: 0,
    },
  ]);

  const counterIncrease = (id) => {
    const newCounter = todoList.map((counter) => {
      if (counter.id == id + 1) {
        return {
          ...counter,
          vote: counter.vote + 1,
        };
      }
      return counter;
    });
    setTodoList(newCounter);
  };

  const counterDecrease = (id) => {
    const newCounter = todoList.map((counter) => {
      if (counter.id == id + 1) {
        return {
          ...counter,
          vote: counter.vote - 1,
        };
      }
      return counter;
    });
    setTodoList(newCounter);
  };
  const contextValue = {
    todoList,
    setTodoList,
    counterIncrease,
    counterDecrease,
  };
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
