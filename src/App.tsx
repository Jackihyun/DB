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
import RequireAuth from "./components/RequireAuth";
import Projects from "./pages/Projects";
import Employees from "./pages/Employees";

export default function App() {
  const isLoggedIn = !!sessionStorage.getItem("role"); // sessionStorage로 변경

  return (
    <Router>
      <Routes>
        {/* 로그인 상태에 따라 첫 화면을 로그인 또는 대시보드로 분기 */}
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <Home />
                  </Layout>
                </RequireAuth>
              }
            />
            <Route
              path="/projects"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <Projects />
                  </Layout>
                </RequireAuth>
              }
            />
            <Route
              path="/employees"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <Employees />
                  </Layout>
                </RequireAuth>
              }
            />
            <Route
              path="/evaluations"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <Home />
                  </Layout>
                </RequireAuth>
              }
            />
            <Route
              path="/approvals"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <Home />
                  </Layout>
                </RequireAuth>
              }
            />
            <Route
              path="/my-profile"
              element={
                <RequireAuth role="employee">
                  <Layout>
                    <MyProfile />
                  </Layout>
                </RequireAuth>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}
