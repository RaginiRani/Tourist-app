import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh", // Adjust map height
};

const center = {
  lat: 26.9124, // Jaipur coordinates (example)
  lng: 75.7873,
};

// Dummy tourist data
const dummyTourists = [
  { id: 1, name: "Tourist A", lat: 26.9124, lng: 75.7873, status: "Safe" },
  { id: 2, name: "Tourist B", lat: 26.915, lng: 75.780, status: "Alert" },
  { id: 3, name: "Tourist C", lat: 26.918, lng: 75.790, status: "Safe" },
];

export default function MapView() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {dummyTourists.map((tourist) => (
          <Marker
            key={tourist.id}
            position={{ lat: tourist.lat, lng: tourist.lng }}
            title={tourist.name + " - " + tourist.status}
            icon={{
              url:
                tourist.status === "Safe"
                  ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
