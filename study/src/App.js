import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import './index.css';
import Book from './components/Book';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import QuizPage from './components/QuizPage';
import quizData from './components/quizData';
import AdBanner from './components/adBanner';
import './components/transition.css';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<RegisterPage />} exact />
          <Route path='/main' element={<MainPage />}/>
          <Route path="/book/:bookTitle" element={<Book />} />
          <Route path="/quiz/:bookTitle" element={<QuizPage quizData={quizData} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper>
      <Routes>
        <Route path="/" element={<RegisterPage />} exact />
        <Route path='/main' element={<MainPage />}/>
        <Route path="/book/:bookTitle" element={<Book />} />
        <Route path="/quiz/:bookTitle" element={<QuizPage quizData={quizData} />} />

      </Routes>
      <AdBanner/>
      </AppWrapper>
    </Router>
  );
}

export default App;
