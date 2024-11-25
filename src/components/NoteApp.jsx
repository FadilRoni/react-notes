import React, { useState, useCallback } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData, showFormattedDate } from "../utils";

export default function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, onSearch] = useState("");
  const date = new Date();

  const onDeleteHandler = useCallback((id) => {
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
  });

  const onArchiveHandler = useCallback(
    (id) => {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      );
      setNotes(updatedNotes);
    },
    [notes]
  );

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((notes) => [
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: date.toISOString(),
      },
    ]);
  };

  const onSearchHandler = (e) => {
    onSearch(e.target.value);
  };

  const searchNote = searchTerm
    ? notes.filter((note) =>
        note.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : notes;

  return (
    <div>
      <NoteAppHeader searchTerm={searchTerm} searchHandler={onSearchHandler} />
      <NoteAppBody
        addNote={onAddNoteHandler}
        notes={searchNote}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        showFormattedDate={showFormattedDate}
      />
    </div>
  );
}
