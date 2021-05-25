import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from './CloseIcon/close.svg';
import styles from './Modal.module.scss';

const Modal = ({ modalContent }) => {
    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(<div className={styles.backdrop}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                    <CloseIcon className={styles.closeBtnIcon}/>
                    {modalContent}
                </div>
            </div>
        </div>, modalRoot)
     );
}

export default Modal;