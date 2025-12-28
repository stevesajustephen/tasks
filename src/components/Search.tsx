import React, { useState, type JSX } from "react";
import type { Task } from "../types/types";

type SearchProps = {
  searchTask: (desc: string) => Task;
};

const Search = ({ searchTask }: SearchProps): JSX.Element => {
  const [searchName, setSearchName] = useState("");
  const [task, setTask] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const item: Task = searchTask(searchName);
    const value: string = item?.description || "not found";
    setTask(value);
  }

  return (
    <div>
      Search
      <form action="" onSubmit={handleSubmit}>
        <input value={searchName} onChange={handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
      <h2>{task}</h2>
    </div>
  );
};

export default Search;
