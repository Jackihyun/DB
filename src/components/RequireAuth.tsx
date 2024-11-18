import { Navigate, Link } from "react-router-dom";

export default function RequireAuth({
  children,
  role,
}: {
  children: JSX.Element;
  role: string;
}) {
  const userRole = localStorage.getItem("role");

  if (!userRole) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">로그인이 필요합니다</h2>
        <p className="mb-4">이 페이지에 접근하려면 로그인해 주세요.</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          로그인 페이지로 이동
        </Link>
      </div>
    );
  }

  if (userRole !== role) {
    alert("접근 권한이 없습니다.");
    return <Navigate to="/dashboard" />;
  }

  return children;
}
