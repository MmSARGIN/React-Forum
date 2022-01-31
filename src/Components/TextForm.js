import { api } from "../api";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function TextForm(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [text, setText] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  useEffect(() => {
    if (props.text?.title && props.text?.content) setText(props.text);
  }, [props.text]);

  const inputOnChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (props.text?.title) {
      api()
        .put(`posts/${params.id}`, text)
        .then((response) => {
          
          navigate(`/posts/${params.id}`);
        })
        .catch((error) => {
          setError("İki alanda zorunludur!!");
        });
    } else {
      api()
        .post(`/posts`, text)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          setError("İki alanda zorunludur!!");
        });
    }
  };

  return (
    <div>
      {error && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>

          <input
            name="title"
            type="text"
            value={text.title}
            onChange={inputOnChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            name="content"
            rows="2"
            value={text.content}
            onChange={inputOnChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={formSubmit}>
          Ekle
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </div>
  );
}

export default TextForm;
