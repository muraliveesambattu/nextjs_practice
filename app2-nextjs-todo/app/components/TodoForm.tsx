'use client';

import { useState } from "react";

export default function TodoForm({ onAdd }) {

  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text })
    });

    setText("");
    // onAdd();
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button>Add</button>

    </form>
  );
}