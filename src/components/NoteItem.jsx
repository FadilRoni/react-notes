import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

export default function NoteItem({
  id,
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchive,
  showFormattedDate,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        body={body}
        createdAt={createdAt}
        showFormattedDate={showFormattedDate}
      />
      <NoteItemAction
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
        id={id}
      />
    </div>
  );
}
