// src/pages/Home.tsx

import { FaUser, FaProjectDiagram, FaClipboardCheck } from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";
import ChartComponent from "../components/Chart";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard
          title="프로젝트 수"
          value="12"
          icon={<FaProjectDiagram />}
          bgColor="bg-blue-100"
        />
        <DashboardCard
          title="직원 수"
          value="100"
          icon={<FaUser />}
          bgColor="bg-green-100"
        />
        <DashboardCard
          title="평가 완료"
          value="45"
          icon={<FaClipboardCheck />}
          bgColor="bg-yellow-100"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <ChartComponent />
      </div>
    </div>
  );
}
