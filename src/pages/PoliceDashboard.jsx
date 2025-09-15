// src/pages/PoliceDashboard.jsx

import AlertNotification from "../components/AlertNotification";
import MapView from "../components/Mapview";
import Sidebar from "../components/Sidebar";

export default function PoliceDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Police see both Map + Alerts prominently */}
        <h2 className="text-2xl font-bold text-center mt-4">🚨 Police Dashboard</h2>
        <MapView />
        <AlertNotification />
      </div>
    </div>
  );
}
