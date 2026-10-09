import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import QuizProvider from "./context/QuizContext";
import Quiz from "./pages/Quiz";
import LeaderBoard from "./pages/LeaderBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Result = lazy(() => import("./pages/Result"));

export default function App() {
  return (
    <><QuizProvider>
    <BrowserRouter>
      <Suspense fallback={<h2 className="text-center mt-5">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </QuizProvider>
    </>
  );
}
