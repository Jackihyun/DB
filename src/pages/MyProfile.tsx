// src/pages/MyProfile.tsx

import { useState, useEffect } from "react";

export default function MyProfile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    // 사용자 정보를 localStorage에서 가져오기
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { name, username, role } = JSON.parse(storedUser);
      setName(name);
      setUsername(username);
      setRole(role);
    }
  }, []);

  const handleSave = () => {
    // 업데이트된 사용자 정보를 저장 (데모용)
    const updatedUser = { name, username, role };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("프로필 정보가 업데이트되었습니다.");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">내 프로필</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">아이디</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          disabled // 아이디는 변경하지 못하게 설정
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">역할</label>
        <input
          type="text"
          value={role}
          className="w-full p-2 border rounded"
          disabled // 역할도 변경하지 못하게 설정
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        저장
      </button>
    </div>
  );
}
