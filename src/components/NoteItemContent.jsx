import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemDate from "./NoteItemDate";
import NoteItemBody from "./NoteItemBody";

export default function NoteItemContent({
  title,
  body,
  createdAt,
  showFormattedDate,
}) {
  return (
    <div className="note-item__content">
      <NoteItemTitle title={title} />
      <NoteItemDate
        createdAt={createdAt}
        showFormattedDate={showFormattedDate}
      />
      <NoteItemBody body={body} />
    </div>
  );
}
