import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TextComment from "./TextComment";
import DeleteModal from "./DeleteModal";

function Details() {
  const [details, setDetails] = useState({});
  const [comment, setComment] = useState([]);

  let params = useParams();

  const handleCommentSubmit = (event, commentBody) => {
    event.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`,
        commentBody
      )
      .then((response) => {
        setComment([...comment, response.data]);

       
      });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${params.id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`
        ),
      ])
      .then((responses) => {
        
        setDetails(responses[0].data);
        setComment(responses[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="ui header">{details.title}</h2>
      <p>{details.content}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${details.id}/textedit`}>
          Düzenle
        </Link>

        <DeleteModal details={details} />
      </div>
      <p>{details.created_at}</p>
      <TextComment comment={comment} handleSubmit={handleCommentSubmit} />
    </>
  );
}

export default Details;
