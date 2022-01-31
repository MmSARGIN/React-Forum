import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";

function DeleteModal({ details }) {
  let params = useParams()
  
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    api()
      .delete(`/posts/${id}/`)
      .then((response) => {
        
        navigate('/');
        
      })
      .catch((error) => {
        console.log("yazıyı silerken hata aldınız");
      });
  };

  return (
    <>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>Yazıyı silmek istediğinizden emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={()=>handleDelete(params.id)}>
            <Icon name="checkmark" />
            Evet Sil
          </Button>
          <Button negative onClick={close}>
            <Icon name="remove" /> İptal Et
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default DeleteModal;
