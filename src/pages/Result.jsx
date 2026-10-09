import { Link } from "react-router-dom";
import { useEffect, useContext, useRef } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Result() {
  const { state, dispatch } = useContext(QuizContext);
  const hasSaved = useRef(false);

  const percentage = Math.round((state.score / state.questions.length) * 100);

  useEffect(() => {
    if (hasSaved.current) return;
    hasSaved.current = true;

    const entry = {
      name: state.username,
      score: state.score,
      percentage,
      date: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const updated = [...stored, entry];

    updated.sort((a, b) => b.score - a.score);

    localStorage.setItem("leaderboard", JSON.stringify(updated));
  }, [state.username, state.score, percentage]);

  return (
    <div className="container  text-center mt-5">
      <div className="card shadow p-5">
        <h2 className="fw-bold mb-3">🎉 Quiz Completed</h2>
        <h4>{state.username}, your score is:</h4>
        <h1 className="text-success">{state.score}</h1>
        <div className="d-flex justify-content-center gap-3 mt-4" />
        <Link to="/leaderboard" className="bt bt-primary">
          View LeaderBoard
        </Link>
        <Link
          to="/"
          onClick={() => dispatch({ type: "RESET" })}
          className="btn btn-warning"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
