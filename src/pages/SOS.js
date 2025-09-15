import React from "react";

function SOSButton() {
  const sendSOS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Send SOS data to backend
          fetch("http://your-backend-url.com/panic-alert", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              touristId: "T123",   // Example tourist ID
              latitude,
              longitude,
              timestamp: new Date().toISOString(),
            }),
          })
            .then(() => alert("🚨 SOS Sent! Police & contacts notified."))
            .catch(() => alert("❌ Error sending SOS"));
        },
        (error) => alert("Location Error: " + error.message)
      );
    } else {
      alert("❌ Geolocation not supported in this browser");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button
        onClick={sendSOS}
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
          padding: "20px 40px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
        }}
      >
        SOS
      </button>
    </div>
  );
}

export default SOSButton;