import React from "react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
function Text(props) {
  const [text, setText] = useState([]);
  useEffect(() => {
    api()
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setText(response.data);
      });
  }, []);

  
  return (
    <div className="ui relaxed divided list">
      {text.map((item, i) => {
        return (
          <div key={i} className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${item.id}`} className="header">
                {item.title}
              </Link>
              <div className="description">{item.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Text;
