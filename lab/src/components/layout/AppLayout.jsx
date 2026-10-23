import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background font-jakarta">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}