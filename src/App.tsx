import { useState, type JSX } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import type { Task } from "./types/types";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks((prev) => [...prev, task]);

    console.log(tasks);
  };

  return (
    <>
      <Form addTask={addTask}>
        <div></div>
      </Form>
      <List tasks={tasks} />
    </>
  );
}

export default App;
