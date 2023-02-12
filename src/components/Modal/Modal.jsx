import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({ modalOpen, setModalOpen, id, nome, deleteFunc }) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Example Modal"
      id={id}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    > 
      <div className={styles.modalHeader}>
        <div className={styles.iconBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"  stroke="#F15E5E" fill="transparent" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
          <h4>Você tem certeza?</h4>
        </div>
      </div>
      <div className={styles.modalBody}>
        <p>Você realmente deseja excluir o produto "{nome}"? Este processo não pode ser desfeito.</p>
      </div>
      <div className={styles.modalFooter}>
        <button className={styles.btnSecondary} onClick={() => {
          setModalOpen(false)
          window.location.reload()
        }}>Cancelar</button>
        <button className={styles.btnDanger} onClick={(e) => deleteFunc(e)}>Excluir</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
