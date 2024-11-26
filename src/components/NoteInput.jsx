import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const max = 50;

  const titleHandler = (e) => {
    const text = e.target.value;
    if (text.length < max) {
      setTitle(text);
    }

    const limit = document.querySelector("p");
    limit.innerText = "Sisa Karakter: " + (max - text.length);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addNote({ title, body });

    setTitle("");
    setBody("");
    const limit = document.querySelector("p");
    limit.innerText = "Sisa Karakter: " + max;
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={submitHandler}>
        <p className="note-input__title__char-limit">Sisa Karakter: {max}</p>
        <input
          type="text"
          value={title}
          placeholder="Ini adalah judul..."
          className="note-input__title"
          onChange={titleHandler}
          required
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini..."
          className="note-input__body"
          onChange={bodyHandler}
          value={body}
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
}
