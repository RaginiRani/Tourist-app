import { useEffect, useState } from "react";
import io from "socket.io-client";

// Replace with your backend URL
const SOCKET_SERVER_URL = "http://localhost:5000";

export default function AlertNotification() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    // Listen for 'panicAlert' events from server
    socket.on("panicAlert", (data) => {
      setAlerts((prevAlerts) => [data, ...prevAlerts]);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4 bg-white m-4 rounded-2xl shadow-lg h-36 overflow-y-auto">
      <h3 className="text-xl font-bold mb-3 text-gray-700">Alerts</h3>
      {alerts.length === 0 ? (
        <p className="text-gray-500">No alerts yet.</p>
      ) : (
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li
              key={index}
              className="p-2 rounded-lg bg-red-100 text-red-700 font-medium"
            >
              {alert.tourist}: {alert.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
