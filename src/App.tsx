// src/App.tsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import MyProfile from "./pages/MyProfile";
import Projects from "./pages/Projects";
import Employees from "./pages/Employees";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인/비로그인 관계없이 모든 페이지 접근 가능 */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/employees"
          element={
            <Layout>
              <Employees />
            </Layout>
          }
        />
        <Route
          path="/evaluations"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/approvals"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/my-profile"
          element={
            <Layout>
              <MyProfile />
            </Layout>
          }
        />
        {/* 잘못된 경로 처리 */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}
