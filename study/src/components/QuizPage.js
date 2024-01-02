import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Quiz.module.css"

function QuizPage({ quizData }) {
    const { bookTitle } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuizSet, setCurrentQuizSet] = useState([]);

    useEffect(() => {
        if (quizData[bookTitle]) {
            setCurrentQuizSet(quizData[bookTitle]);
        }
    }, [bookTitle, quizData]);

    const question = currentQuizSet[currentQuestionIndex];

    const handleAnswerSubmit = () => {
        if (question && question.answer === userAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < currentQuizSet.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
        <div>
            <div>
                퀴즈 완료! 당신의 점수는: {score}/{currentQuizSet.length}
            </div>
            <div className={styles.button}>
                <a href="https://smartowl.co.kr/" className="linkButton">똑똑한 부엉이로 ~</a>
            </div>
        
        </div>
    
        
        
        );

    }

    return (
        <div>
            <div className={styles.questionNo}>{question && question.question}</div>
            <div>
                {question && question.photo && (<img src={question.photo} alt='Quiz Image'className={styles.quizImage} />)}
            </div>
            <div className={styles.buttonContainer}>
                {question && question.options.map(option => (
                    <button key={option} onClick={() => setUserAnswer(option)} className={styles.quizButton}>
                        {option}
                    </button>    
                ))}
            </div>
            <button className={styles.button} onClick={handleAnswerSubmit}>다음</button>
        </div>
    );
}

export default QuizPage;
