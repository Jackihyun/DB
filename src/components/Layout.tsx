// src/components/Layout.tsx

import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-100 p-8">{children}</main>
    </div>
  );
}
