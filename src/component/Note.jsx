import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      {/*
      <h1>This is the title</h1>
      <p>this is the content</p>
      */}
    </div>
  );
}

export default Note;
