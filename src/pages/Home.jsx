import { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const startQuiz = () => {
    if (!name.trim()) return alert("Please enter your name");
    dispatch({ type: "SET_NAME", payload: name });
    navigate("/quiz");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4"> 😊Try this , "Quiz challenge" 🕵🏻</h1>
      <input
        placeholder="Enter your name"
        type="text"
        className="form-control w-50 mx-auto mb-3  rounded-3"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={startQuiz} className="btn btn-primary bt-lg">
        Start Quiz
      </button>
    </div>
  );
}
