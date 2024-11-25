import React from "react";
// import DeleteButton from "./DeleteButton";
// import ArchiveButton from "./ArchiveButton";

export default function NoteItemAction({ id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}
