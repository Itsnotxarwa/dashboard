import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: '16 décembre',
    appels: 590,
  },
  {
    name: '17 décembre',
    appels: 868,
  },
  {
    name: '18 décembre',
    appels: 1397,
  },
  {
    name: '19 décembre',
    appels: 1480,
  },
  {
    name: '20 décembre',
    appels: 1520,
  },
  {
    name: '21 décembre',
    appels: 1400,
  },
];

// #endregion
const Chart = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxHeight: '25vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#ffffff20" />
      <XAxis dataKey="name" tick={{ fill: "#9CA3AF", fontSize: 12 }} scale="band" tickLine={false} />
      <YAxis width="auto"  tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={false} tickLine={false} hide />
      <Tooltip contentStyle={{
    backgroundColor: "#1f1f1f",
    borderRadius: "12px",
    border: "none",
    color: "#fff"
  }} />
      <Bar dataKey="appels" barSize={20} fill="#BD3E69" />
      <Line type="monotone" dataKey="appels" stroke="#a068c1" />
    </ComposedChart>
  );
};

export default Chart;