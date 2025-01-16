import React, { FC, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "./todocontext";
import { CounterContext } from "./countercontext";

interface IProps {}

const Details: FC<IProps> = (props) => {
  const { id } = useParams();
  const ctx = useContext(TodoContext);
  const ctxCount = useContext(CounterContext);
  const navigate = useNavigate();
  console.log(ctx.todoList.find((x) => x.id == id).name);
  return (
    <>
      <div>Detail Page</div>
      <p>Id : {id}</p>
      <p>Name : {ctx.todoList.find((x) => x.id == id).name}</p>
      <p>Votes : {ctxCount.todoList.find((x) => x.id == id).vote}</p>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default Details;
