import React from "react";
import TextList from "./TextList";
import CommentForm from "./CommentForm";
function TextComment(props) {
  return (
    <>
      <TextList comment={props.comment} />
      <CommentForm handleSubmit={props.handleSubmit} />
    </>
  );
}

export default TextComment;
