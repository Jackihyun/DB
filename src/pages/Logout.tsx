// src/components/Logout.tsx

import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("role"); // 세션 스토리지에서 역할 정보 제거
    localStorage.removeItem("user"); // 데모용 사용자 정보 제거 (필요 시)
    navigate("/login"); // 로그인 페이지로 이동
    window.location.reload(); // 페이지 새로고침하여 세션 상태 초기화
  };

  return (
    <button
      onClick={handleLogout}
      className="w-fit text-white hover:scale-95 p-0 rounded mt-0"
    >
      로그아웃
    </button>
  );
}
