import React,{useState, useEffect} from 'react';
import {useParams,  useLocation} from 'react-router-dom'
import {api} from '../api'
import CommentEditForm from './CommentEditForm'



function CommentEdit(props) {
const [result, setResult] = useState({display_name:"", body:""})

let {state} = useLocation()
  let params = useParams()






useEffect(()=> {
api()
.get(`/posts/${params.postId}/comments`)
.then((response)=> {
 
  return response.data.map((item, i)=> item.id == params.id ? setResult({display_name:response.data[i].display_name, body:response.data[i].body }):false)
})
.catch((error) => console.log(error))
}, [])


// return response.data.map((item, i)=> item.id == params.id ? setResult({display_name:response.data.display_name, body:response.data.body }):false)





  return <>
  <h1>Yorum Düzenleme Formu</h1>
  <CommentEditForm result={result} />
  </>
}

export default CommentEdit;
