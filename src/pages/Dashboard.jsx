// src/pages/Dashboard.jsx
import MapView from "../components/Mapview";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tourists only see map */}
        <h2 className="text-2xl font-bold text-center mt-4">🧳 Tourist Dashboard</h2>
        <MapView />
      </div>
    </div>
  );
}
