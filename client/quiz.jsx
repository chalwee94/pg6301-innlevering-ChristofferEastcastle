import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function FrontPage() {
  return (
    <div>
      <h1>QuizApplication</h1>
      <ul>
        <li>
          <Link to={"/question"}>Answer question</Link>
        </li>
      </ul>
    </div>
  );
}

function QuestionPage() {
  return (
    <div>
      <h1>Question</h1>
      <p>/*Click on the one you think is right*/</p>
      <Question />
    </div>
  );
}

function Question({ correctAnswer, answered }) {
  const [question, setQuestion] = useState();

  useEffect(async () => {
    const text = await fetchQuestion();
    setQuestion(text.data)
  }, []);



  async function fetchQuestion() {
    return await axios.get("http://localhost:3000/api/question");
  }


  function handleAnswer(answer) {
    answered((a) => a + 1);
    if (isCorrectAnswer(question, answer)) {
      correctAnswer((c) => c + 1);
      navigate("/answer/correct");
    } else {
      navigate("/answer/wrong");
    }
  }
  if (question) {
    return (
      <div>
        <h4>{question.question}</h4>
        {Object.keys(question.answers).map((k) => (
          <p onClick={() => handleAnswer(k)} key={k}>
            {question.answers[k]}
          </p>
        ))}
      </div>
    );
  }
  return <h4>Loading...</h4>
}

export function QuizApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
