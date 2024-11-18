// src/pages/Login.tsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const {
        username: storedUsername,
        password: storedPassword,
        role,
      } = JSON.parse(storedUser);
      if (username === storedUsername && password === storedPassword) {
        sessionStorage.setItem("role", role); // 세션 스토리지에 저장
        navigate("/dashboard");
        window.location.reload(); // 로그인 후 새로고침하여 세션 반영
        return;
      }
    }
    alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          로그인
        </button>
        <div className="text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
