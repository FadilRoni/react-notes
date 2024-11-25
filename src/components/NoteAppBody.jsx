import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function Check({ notes, onDelete, onArchive, showFormattedDate }) {
  if (notes.length == 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan.</p>;
  } else {
    return (
      <NoteList
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        showFormattedDate={showFormattedDate}
      />
    );
  }
}

export default function NoteAppBody({
  notes,
  addNote,
  onDelete,
  onArchive,
  showFormattedDate,
}) {
  const archive = notes.filter((note) => note.archived);
  const notArchive = notes.filter((note) => !note.archived);
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <Check
        notes={notArchive}
        onDelete={onDelete}
        onArchive={onArchive}
        showFormattedDate={showFormattedDate}
      />
      <h2>Arsip</h2>
      <Check
        notes={archive}
        onDelete={onDelete}
        onArchive={onArchive}
        showFormattedDate={showFormattedDate}
      />
    </div>
  );
}
