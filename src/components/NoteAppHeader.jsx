import React from "react";

export default function NoteAppHeader({ searchTerm, searchHandler }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchTerm}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}
