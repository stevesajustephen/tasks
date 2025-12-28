import React, { useState, type JSX } from "react";
import type { Task } from "../types/types";

type FormProps = {
  addTask: (task: Task) => void;
  children?: React.ReactNode;
};

const Form = ({ addTask }: FormProps): JSX.Element => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(task);
    const newTask: Task = {
      id: Math.random().toFixed(16).toString(),
      description: task,
      isCompleted: false,
    };
    addTask(newTask);
    setTask("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  return (
    <>
      <h2>Form Input</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">task description </label>
        <input value={task} onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
