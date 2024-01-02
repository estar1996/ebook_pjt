import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // api 추가 가능
        navigate('/main', { state: {name, age, gender}});
        console.log({age,gender});
    };



    return (
        <form onSubmit={handleSubmit} className={styles.registerForm}>
            <div className={styles.imageContainer}>
                {/* <img className={styles.registerImage} src="https://smartowl9910.cafe24.com/web/other/seo/smartowl.jpg"></img> */}
                {/* {<img className={styles.registerImage} src="images/register/circleimg.png"/>} */}
                <div className={styles.circleProfile}></div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>아이 이름(별명)</label>
                <input
                    type="text"
                    id="name"
                    className={styles.inputField}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            
                <label htmlFor="age" className={styles.label}>아이 나이</label>
                <input
                    type="number"
                    id="age"
                    className={styles.inputField}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            
                <label htmlFor="gender" className={styles.label}>아이 성별</label>
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
            {/* <div className="buttonContainer"> */}
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>등 록</button>
            </div>
        </form>
    );



};

export default RegisterPage;