// src/pages/Signup.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee"); // 기본 역할은 직원으로 설정
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // 간단한 데모용 회원가입 로직
    const newUser = {
      username,
      password,
      role,
      name,
    };

    // 회원가입 데이터를 localStorage에 저장 (데모용)
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("회원가입이 완료되었습니다. 로그인해 주세요.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
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
        <label className="block mb-2 text-gray-700">역할 선택:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="employee">직원</option>
          <option value="manager">경영진</option>
        </select>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
