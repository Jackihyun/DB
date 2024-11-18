import React from "react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  bgColor,
}: DashboardCardProps) {
  return (
    <div
      className={`p-4 rounded-lg ${
        bgColor || "bg-white"
      } shadow-lg flex items-center justify-between`}
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
      </div>
      <div className="text-4xl text-gray-400">{icon}</div>
    </div>
  );
}
