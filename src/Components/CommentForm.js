import React, { useState } from "react";

function CommentForm(props) {
  const handleOnChange = (e) => {
    setCommentBody({ ...commentBody, [e.target.name]: e.target.value });
  };
  const [commentBody, setCommentBody] = useState({
    display_name: "",
    body: "",
  });
  return (
    <>
      <h3>Yorum Yaz</h3>
      <form
        className="ui form"
        onSubmit={(event) => {
          props.handleSubmit(event, commentBody);
          setCommentBody({ display_name: "", body: "" });
        }}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Search mini..."
            onChange={handleOnChange}
            value={commentBody.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Tell us more"
          rows="3"
          onChange={handleOnChange}
          value={commentBody.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Yorum Gönder
        </button>
      </form>
    </>
  );
}

export default CommentForm;
