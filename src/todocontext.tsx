import React, { createContext, FC, useState } from "react";

interface IProps {}

export const TodoContext = createContext({
  todoList: [],
});

const TodoContextProvider: FC<IProps> = (props) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Name1",
    },
    {
      id: 2,
      name: "Name2",
    },
    {
      id: 3,
      name: "Name3",
    },
  ]);

  const contextValue = {
    todoList,
    setTodoList,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
