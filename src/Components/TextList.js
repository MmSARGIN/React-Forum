import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import CommentDeleteModal from "./CommentDeleteModal";

function TextList(props) {

  let params = useParams()
 


  return (
    <>
      <h3>Yorumlar</h3>
      
      {props.comment.map((item) => {
       return (
          <div key={item.id}  className="ui relaxed list">
            <div className="item">
              <img
                className="ui avatar image"
                src="/images/avatar/small/daniel.jpg"
              />
              <div className="content">
                <a className="header">{item.display_name}</a>
                <div className="description">{item.body}</div>
                <p>{item.id}</p>
              </div>
              
            </div>
            <Link className="ui button blue" to={{pathname:`/posts/${params.id}/comments/${item.id}`}} state={props.comment}  >Düzenle</Link>
            <CommentDeleteModal comment={props.comment} item={item.id}/>
            </div>
        );
    }
        
      )}
    </>
  );
}

export default TextList;
