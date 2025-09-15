const dummyTourists = [
  { id: 1, name: "Tourist A", status: "Safe" },
  { id: 2, name: "Tourist B", status: "Alert" },
  { id: 3, name: "Tourist C", status: "Safe" },
];

export default function Sidebar() {
  return (
    <div className="w-72 bg-gradient-to-b from-purple-500 to-pink-500 text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">Tourist List</h2>
      <ul className="space-y-3">
        {dummyTourists.map((tourist) => (
          <li
            key={tourist.id}
            className={`p-3 rounded-xl flex justify-between items-center font-semibold ${
              tourist.status === "Safe" ? "bg-green-500/70" : "bg-red-500/70"
            }`}
          >
            <span>{tourist.name}</span>
            <span>{tourist.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
