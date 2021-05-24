import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ modalContent }) => {
    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(<div className={styles.backdrop}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.closeBtnIcon}>
                        <g fill="none">
                            <path d="M1 1L15 15" stroke="black" />
                            <path d="M1 15L15 0.999999" stroke="black"/>
                        </g>
                    </svg>
                    {modalContent}
                </div>
            </div>
        </div>, modalRoot)
     );
}

export default Modal;