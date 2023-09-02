/* App.js */

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const questions = [
  {
    id: 0,
    q: "Welcome To KBC",
    a1: "Play Game",
  },
  {
    id: 1,
    q: "Which Country was the first to go to the Space",
    a1: "USSR",
      
    a2: "USA",
    a3: "China",
    a4: "India",
  },
   
  {
    id: 2,
    q: "Who is the longest serving PM of india",
    a1: "Narendra Modi",
    a2: "Jawaharlal nehru",
    a3: "Indira Gandhi",
    a4: "Lal Bahadur Shastri",
  },
  {
    id: 4,
    q: "When did india won its first cricket world cup",
    a1: "2011",
    a2: "1987",
    a3: "1979",
    a4: "1983",
  },
  {
    id: 3,
    q: "Which scientist gave the theory of relativity",
    a1: "Issac Newton",
    a2: "Neil Bohr",
    a3: "Albert Einstein",
    a4: "None of these",
  },
  {
    id: 2,
    q: "Which of the following countries is the only country to send man to moon",
    a1: "USSR",
    a2: "USA",
    a3: "China",
    a4: "India",
  },
  {
    id: 3,
    q: "Which of the most advanced 5th Gen fighter jet?",
    a1: "F-16 Falcon",
    a2: "Su-30 mki",
    a3: "F-22 Raptor",
    a4: "Mig-25 Foxbat",
  },
  {
    id: 1,
    q: "Which country has won the maximum number of cricket world cup",
    a1: "Australia",
    a2: "New-Zealand",
    a3: "West-indies",
    a4: "England",
  },
  {
    id: 1,
    q: "Which of the following countries don't recognize Isarel as a country",
    a1: "Pakistan",
      
    a2: "USA",
    a3: "Sri-Lanka",
    a4: "India",
  },
  {
    id: 4,
    q: "Which country could do a successful mars orbital mission in one go",
    a1: "USSR",
    a2: "USA",
    a3: "China",
    a4: "India",
  },
  {
    id: 3,
    q: "which of the following team have never won a IPL trophy",
    a1: "SRH",
      
    a2: "KKR",
    a3: "KXIP",
    a4: "RR",
  },
  {
    id: 1,
    q: "When did India became a Nuclear State",
    a1: "1998",
    a2: "1974",
    a3: "1971",
    a4: "2014",
  },
    {
    id: 3,
    q: "which of the following is not a miss world ",
    a1: "Priyanka Chopra ",
    a2: "Manushi Chillar",
    a3: "Sushmihta sen",
    a4: "Yukta Mookhey",
  },



  


  {
    id: 10,
    q: "End of the Game",
    a1: "Play Again",
  },
];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [s, cs] = useState(-1);

  const nextQuestion = () => {
    if (questionIndex < 13) {
      cs(s + 1);
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      cs(-1);
    }
  };

  const wrong = () => {
    setQuestionIndex(13);

  };

  const typeA = () => (
    <div className="question-container">
      
      <h1 className="question">Q{questionIndex}. {questions[questionIndex].q}</h1>
      <div className="options">
        <button className="option-button" onClick={nextQuestion}>
          {questions[questionIndex].a1}
        </button>
        <button className="option-button" onClick={wrong}>
          {questions[questionIndex].a2}
        </button>
        <button className="option-button" onClick={wrong}>
          {questions[questionIndex].a3}
        </button>
        <button className="option-button" onClick={wrong}>
          {questions[questionIndex].a4}
        </button>
      </div>
    </div>
  );
  const typeB = () => (
  <div className="question-container">
    
    <h1 className="question">Q{questionIndex}.{questions[questionIndex].q}</h1>
    <div className="options">
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a1}
      </button>
      <button className="option-button" onClick={nextQuestion}>
        {questions[questionIndex].a2}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a3}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a4}
      </button>
    </div>
  </div>
);
const typeC = () => (
  <div className="question-container">
    
    <h1 className="question">Q{questionIndex}.{questions[questionIndex].q}</h1>
    <div className="options">
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a1}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a2}
      </button>
      <button className="option-button" onClick={nextQuestion}>
        {questions[questionIndex].a3}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a4}
      </button>
    </div>
  </div>
);
const typeD = () => (
  <div className="question-container">
    
    <h1 className="question">Q{questionIndex}.{questions[questionIndex].q}</h1>
    <div className="options">
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a1}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a2}
      </button>
      <button className="option-button" onClick={wrong}>
        {questions[questionIndex].a3}
      </button>
      <button className="option-button" onClick={nextQuestion}>
        {questions[questionIndex].a4}
      </button>
    </div>
  </div>
);
const typeE = () => (
  <div className="question-container">
    <h1 className="question">{questions[questionIndex].q}</h1>
    <h3 className="q"> Your Reward:{s*1000000}</h3>
    <div className="options">
      <button className="option-button" onClick={nextQuestion}>
        {questions[questionIndex].a1}
      </button>
    </div>
  </div>
);
const typeS = () => (
  <div className="question-container">
    <h1 className="question">{questions[questionIndex].q}</h1>
    
    <div className="options">
      <button className="option-button" onClick={nextQuestion}>
        {questions[questionIndex].a1}
      </button>
    </div>
  </div>
);




  // Define typeB, typeC, typeD, typeE, and typeS similarly

  function Timer() {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
      const countdown = () => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      };

      const intervalId = setInterval(countdown, 1000);

      return () => clearInterval(intervalId);
    }, [seconds]);

    if (seconds === 0) {
      setQuestionIndex(13);
      return typeE();
    }

    return (
      <div id="timer-container">
        <h2 className="timer">{seconds}</h2>
      </div>
    );
  }

  const swap = () => {
    const question = questions[questionIndex];
    if (question.id === 0) {
      return <div>{typeS()}</div>;
    } else if (question.id === 1) {
      return (
        <div>
          <Timer />
          {typeA()}
        </div>
      );
    } else if (question.id === 2) {
      return (
        <div>
          <Timer />
          {typeB()}
        </div>
      );
    } else if (question.id === 3) {
      return (
        <div>
          <Timer />
          {typeC()}
        </div>
      );
    } else if (question.id === 4) {
      return (
        <div>
          <Timer />
          {typeD()}
        </div>
      );
    } else if (question.id === 10) {
      return <div>{typeE()}</div>;
    } else {
      return <div>{typeS()}</div>;
    }
  };

  return (
    <div>
      {swap()}
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
