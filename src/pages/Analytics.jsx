import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const dummyData = [
  { area: "Area A", tourists: 12, alerts: 2 },
  { area: "Area B", tourists: 20, alerts: 5 },
  { area: "Area C", tourists: 8, alerts: 1 },
  { area: "Area D", tourists: 15, alerts: 3 },
];

export default function Analytics() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Tourist Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Tourists & Alerts (Bar Chart)</h3>
          <BarChart width={500} height={300} data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tourists" fill="#8884d8" />
            <Bar dataKey="alerts" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Alerts Trend (Line Chart)</h3>
          <LineChart width={500} height={300} data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="alerts" stroke="#ff4d6d" strokeWidth={3} />
            <Line type="monotone" dataKey="tourists" stroke="#4d79ff" strokeWidth={3} />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
