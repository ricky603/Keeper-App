import React from "react";

function Note(props) {
  return (
    <div id={props.id} className="note">
      <h1 className="wrap-text">{props.title}</h1>
      <p className="wrap-text">{props.content}</p>
      <button
        onClick={() => {
          props.deleteItem(props.id)
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
