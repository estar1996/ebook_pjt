import styles from "./RegisterPage.module.css";

const Modal = ({ isActive, onclose, chidren}) => {
    if (!isActive) return null;


    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onclose}>선택</button>
            </div>

        </div>

    )
};

export default Modal;

