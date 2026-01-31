import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";

const ReChart = ({ doctorData }) => {
  // Prepare chart data
  const reChartData = doctorData.map((doctor) => ({
    name: doctor.name,
    fee: doctor.consultationFee,
  }));

  // Custom triangle bar shape
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    if (x == null || y == null || width == null || height == null) return null;

    return (
      <path
        d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
        fill={fill}
      />
    );
  };

  // Colors for each bar
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#d0ed57"];

  return (
    <div className="p-5 bg-white rounded-2xl my-5" style={{ width: "100%", height: 400 }}>
      {/* ResponsiveContainer makes chart full width & height */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={reChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" shape={TriangleBar}>
            {reChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChart;
