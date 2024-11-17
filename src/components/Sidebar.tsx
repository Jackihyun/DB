// src/components/Sidebar.tsx

import { Link } from "react-router-dom";
import Logout from "../pages/LogOut";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaClipboardList,
  FaChartPie,
  FaUserCircle,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-500 text-white flex flex-col">
      <Link to="/dashboard">
        <div className="text-center p-4 text-2xl font-bold border-b border-blue-300">
          ChunKiYong
        </div>
      </Link>
      <nav className="flex-grow p-4">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaHome className="mr-2" /> 대시보드
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaProjectDiagram className="mr-2" /> 프로젝트 관리
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaUser className="mr-2" /> 직원 관리
            </Link>
          </li>
          <li>
            <Link
              to="/evaluations"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaClipboardList className="mr-2" /> 평가 관리
            </Link>
          </li>
          <li>
            <Link
              to="/approvals"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaChartPie className="mr-2" /> 결재 관리
            </Link>
          </li>
          <li>
            <Link
              to="/my-profile"
              className="flex items-center p-3 hover:bg-blue-700 rounded"
            >
              <FaUserCircle className="mr-2" /> 내 프로필
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-300">
        <Logout /> {/* 로그아웃 버튼 추가 */}
      </div>{" "}
    </aside>
  );
}
