import AlertNotification from "../components/AlertNotification";
import MapView from "../components/Mapview";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <MapView/>
        <AlertNotification/>
      </div>
    </div>
  );
}
