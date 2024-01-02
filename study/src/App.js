import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Book from './components/Book';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import QuizPage from './components/QuizPage';
import quizData from './components/quizData';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} exact />
        <Route path='/main' element={<MainPage />}/>
        <Route path="/book/:bookTitle" element={<Book />} />
        <Route path="/quiz/:bookTitle" element={<QuizPage quizData={quizData} />} />

      </Routes>
    </Router>
  );
}

export default App;
