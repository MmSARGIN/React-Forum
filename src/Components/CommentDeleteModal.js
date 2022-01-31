
import React,{useState} from 'react';
import { Button, Icon, Modal } from "semantic-ui-react";
import {useParams, useNavigate} from 'react-router-dom'
import {api} from '../api'
function CommentDeleteModal(props) {
    console.log(props);
    let params = useParams()
  console.log(params,"para");


  
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const show = () => {
      setOpen(true);
    };
    const close = () => {
      setOpen(false);
    };
    const onDelete = (postId, id) => {
        api()
          .delete(`/posts/${postId}/comments/${id}`)
          .then((response) => {
            console.log(response, "ulaa");
            navigate(`/`);
            
          })
          .catch((error) => {
            console.log("Yorumu silerken hata aldınız");
          });
      };
    
    






  return <>
    <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yorumu Sil</Modal.Header>
        <Modal.Content>
          <p>Yorumu silmek istediğinizden emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={()=>onDelete(params.postId, props.item)}>
            <Icon name="checkmark" />
            Evet Sil
          </Button>
          <Button negative onClick={close}>
            <Icon name="remove" /> İptal Et
          </Button>
        </Modal.Actions>
      </Modal>
 </>
}

export default CommentDeleteModal;
