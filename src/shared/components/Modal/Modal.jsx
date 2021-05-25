import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from './CloseIcon/close.svg';
import styles from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const handleClick = () => {
        onClose();
    };

    const handleBackdropClick = (e) => {
        console.log(e);
        if (e.currentTarget === e.target) {
            onClose();
        }
    };


    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(<div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                    <CloseIcon className={styles.closeBtnIcon} onClick={handleClick}/>
                    {children}
                </div>
            </div>
        </div>, modalRoot)
     );
}

export default Modal;