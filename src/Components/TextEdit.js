import React, { useEffect, useState } from "react";
import TextForm from "./TextForm";
import { useParams } from "react-router-dom";
import { api } from "../api";
function TextEdit(props) {
  const [text, setText] = useState({title:"", content:""});

  let params = useParams();

  useEffect(() => {
    api()
      .get(`/posts/${params.id}`)
      .then((response) => {
        console.log(response);
        
        setText({ title: response.data.title, content: response.data });
      });
  }, []);

  return (
    <div>
      <h1>Yazı Düzenleme Formu</h1>
      <TextForm text={text} />
    </div>
  );
}

export default TextEdit;
