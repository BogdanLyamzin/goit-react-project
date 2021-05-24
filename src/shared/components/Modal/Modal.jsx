import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ modalContent }) => {

    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(<div className={styles.backdrop}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                    {modalContent}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magni odio sit, cumque voluptatibus optio temporibus cupiditate numquam blanditiis laborum! Quod quos porro, quasi aut rem iusto consequuntur dignissimos culpa!</p>
                </div>
            </div>
        </div>, modalRoot)
     );
}

export default Modal;