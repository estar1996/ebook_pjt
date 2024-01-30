import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './RegisterPage.module.css';
import { CSSTransition } from 'react-transition-group';
import './transition.css';
import Modal from './Modal';


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const profileImages = [
        'images/register/bear.png',
        'images/register/cat.png',
        'images/register/fox.png',
        'images/register/lion.png',
    ];
    const [selectedImage, setSelectedImage] = useState(profileImages[0]);

    const [showImageSelector, setShowImageSelector] = useState(false);
    const toggleImageSelector = () => {
        setShowImageSelector(!showImageSelector);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/main', { state: {name, age, gender, selectedImage}});
        console.log({age,gender});
    };



    return (
        <form onSubmit={handleSubmit} className={styles.registerForm}>
            <div className={styles.title}>Smartowl</div>
            <div className={styles.imageContainer}>
                <div 
                    className={styles.circleProfile} 
                    style={{ backgroundImage: `url(${selectedImage})` }}
                    onClick={toggleImageSelector}
                ></div>
                {showImageSelector && (
                    <div className={styles.imageSelector}>
                        {profileImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Profile ${index + 1}`}
                                className={styles.profileImage}
                                onClick={() => {
                                    setSelectedImage(image);
                                    toggleImageSelector();
                                }}
                            />
                        ))}
                    </div>
                    
                )}
            </div>
            <Modal isActive={isModalOpen} onClose={toggleModal}>
                    <div className={styles.imageSelector}>
                        {profileImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Profile ${index + 1}`}
                                className={`${styles.profileImage} ${selectedImage === image ? styles.selected : ''}`}
                                onClick={() => {
                                    setSelectedImage(image);
                                    toggleModal();
                                }}
                            />
                        ))}
                    </div>
            </Modal>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>아이 이름(별명)</label>
                <input
                    type="text"
                    id="name"
                    className={styles.inputField}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            
                <label htmlFor="age" className={styles.label}>나이</label>
                <input
                    type="number"
                    id="age"
                    className={styles.inputField}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            
                <label htmlFor="gender" className={styles.label}>성별</label>
                <select
                id="gender"
                value={gender}
                className={styles.inputField}
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">성별 선택</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </div>
                <button type="submit" className={styles.button}>등 록</button>
        </form>
    );



};

export default RegisterPage;


