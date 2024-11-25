import React from "react";

export default function NoteItemDate({ createdAt, showFormattedDate }) {
  return <p className="note-item__date">{showFormattedDate(createdAt)}</p>;
}
