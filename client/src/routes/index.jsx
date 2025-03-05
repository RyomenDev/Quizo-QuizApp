import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import { Home, Profile, Quiz } from "../pages";
import {
  ResetPassword,
  Login,
  Register,
  Questions,
  QuizCreation,
} from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="questions" element={<Questions />} />
        <Route path="customQuiz" element={<QuizCreation />} />
      </Route>
    </Route>
  )
);

export { router };
