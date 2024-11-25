import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({
  notes,
  onDelete,
  onArchive,
  showFormattedDate,
}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          showFormattedDate={showFormattedDate}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={note.archived}
          {...note}
        />
      ))}
    </div>
  );
}
