import React, { type JSX } from "react";
import type { Task } from "../types/types";

type ListProps = {
  tasks: Task[];
};

const List = ({ tasks }: ListProps): JSX.Element => {
  return (
    <div>
      <ul>
        {tasks.map((e: Task, i: number) => {
          return <li key={i}>{e.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
