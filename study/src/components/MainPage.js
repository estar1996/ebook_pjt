// src/MainPage.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Book from './Book';
import bookPages from './bookContent';
import bookPages2 from './bookContent2';
import bookPages3 from './bookContent3';
import styles from './MainPage.module.css';


const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const age = location.state?.age;
  const name = location.state?.name;
  const gender = location.state?.gender;

  const [selectedBookTitle, setSelectedBookTitle] = useState(null);


  const books = [
    { title: "풍풍이", content: bookPages },
    { title: "바마", content: bookPages2 },
    { title: "흥부와 놀부", content: bookPages3 }
  ];

  const handleBookSelect = (title) => {
    setSelectedBookTitle(title);
  }


  
  const recommendedBook = age >= 10 ? '풍풍이' : '바마';
  const Nickname = gender === 'male' ? '왕자님' : '공주님';
  const handleButtonClick = (path) => {
    navigate(path);
  }





  return (

    <div>
      <div className={styles.parentDiv}>
        <div className={styles.welcomeDiv}>
          <h3>환영합니다!</h3>
          <h3>{name} {Nickname} !</h3>
        </div>
        <div className={styles.circleProfile}></div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => handleButtonClick("/book/풍풍이")} className={`${styles.bookButton} ${styles.fungfungButton}`}>풍풍이</button>
        <button onClick={() => handleButtonClick("/book/바마")} className={`${styles.bookButton} ${styles.bamaButton}`}>바마</button>
        <button onClick={() => handleButtonClick("/book/흥부와 놀부")} className={`${styles.bookButton} ${styles.heungbuButton}`}>흥부와 놀부</button>
      </div>
      <div>
      <p>{age}세에 맞는 책을 추천합니다 {recommendedBook}</p>
      </div>
    </div>
    

  );
};

export default MainPage;
