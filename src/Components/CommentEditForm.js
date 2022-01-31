import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
function CommentEditForm(props) {
  let params = useParams();
  
  const [input, setInput] = useState({ body: "" });
  let navigate = useNavigate();

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formClick = (e) => {
    e.preventDefault();

    if (props.result?.body) {
      api()
        .put(`/posts/${params.postId}/comments/${params.id}`, input)
        .then((response) => console.log(response));
      navigate("/");
     
    }
  };

  return (
    <div>
      <div className="ui form">
        <div className="field"></div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            name="body"
            rows="2"
            onChange={inputChange}
            value={input.body}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={formClick}>
          Ekle
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </div>
  );
}

export default CommentEditForm;
