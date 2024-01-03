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
      <div className={styles.emptyDiv}></div>
      <div className={styles.parentDiv}>
        <div className={styles.welcomeDiv}>
          <h2>환영합니다 !</h2>
          <h3>{name} {Nickname} !</h3>
        </div>
        
        <div className={styles.circleProfile}></div>
      </div>
      <div className={styles.recommendDiv}>
        <div className={styles.recommendAge}>{age}세 추천 도서 </div>
        <div className={styles.recommendAgeBook}>{recommendedBook}</div>
      
      </div>
      <div className={styles.buttonContainer}>
        <div>
          <button onClick={() => handleButtonClick("/book/풍풍이")} className={`${styles.bookButton} ${styles.fungfungButton}`}>img</button>
          <a>풍풍이</a>
        </div>
        <div>
          <button onClick={() => handleButtonClick("/book/바마")} className={`${styles.bookButton} ${styles.bamaButton}`}>img</button>
          <a>바마</a>
        </div>
        <div>
          <button onClick={() => handleButtonClick("/book/흥부와 놀부")} className={`${styles.bookButton} ${styles.heungbuButton}`}>img</button>
          <a>흥부와 놀부</a>
        </div>
        <div>
        <button onClick={() => handleButtonClick("/book/흥부와 놀부")} className={`${styles.bookButton} ${styles.heungbuButton}`}>img</button>
        <a>똑똑한 부엉이로 ~</a>
        </div>
  
      </div>
      <div className={styles.smartowlUrl}> 더 많은 도서 이용하기 </div>    
    </div>
    

  );
};

export default MainPage;
