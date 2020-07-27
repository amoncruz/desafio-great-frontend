import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './Register';

const ModalRegister = ({toggle,modal}) => {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cadastrar Usuario</ModalHeader>
        <ModalBody>
            <Register/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalRegister;