import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookPages from "./bookContent";
import bookPages2 from "./bookContent2";
import bookPages3 from "./bookContent3";
import styles from './Book.module.css'

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [dragStartX, setDragStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [pages, setPages] = useState([]);
    const {bookTitle} = useParams();

    const navigate = useNavigate();
    const isLastPage = currentPage === pages.length - 1;

    useEffect(() => {
        if (bookTitle ==="풍풍이") {
            setPages(bookPages);
        } else if (bookTitle === '바마') {
            setPages(bookPages2)
        } else if (bookTitle === "흥부와 놀부") {
            setPages(bookPages3)
        }
    }, [bookTitle]);
    


    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        setDragStartX(touchX);
        setIsDragging(true);
      };
      
      const handleTouchMove = (e) => {
        if (!isDragging) return;
      
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - dragStartX;
      
        if (deltaX > 20 && currentPage > 0) {
          setIsDragging(false);
          prevPage();
        } else if (deltaX < -20 && currentPage < pages.length - 1) {
          setIsDragging(false);
          nextPage();
        }
      };
      
      const handleTouchEnd = () => {
        setIsDragging(false);
        setDragStartX(null);
      };


    const nextPage = () => {
        if (currentPage < pages.length -1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage -1 );
        }
    };


    const goToQuiz = () => {
        navigate(`/quiz/${bookTitle}`);
    }




    return (

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={isDragging ? handleTouchMove : null}
          onTouchEnd={handleTouchEnd}
        >
            <div>
                {pages[currentPage]}
            </div>
            {isLastPage && (
                <div className={styles.buttonContainer}>
                    <button className={styles.quizButton} onClick={goToQuiz}>퀴즈 풀러 가기</button>
                </div>
            )}

        </div>
    );
};


export default Book;

