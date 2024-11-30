import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ZAxis,
} from "recharts";


const AvgOrderValueChart = ({orderValueData}) => {
  const {
    fromDate,
    toDate,
    graphData: { current, previous },
    percentageDifference,
    total,
  } = orderValueData.averageOrderValueInfo;

 
  // Prepare data for the scatter chart
  const chartDataCurrent = current.map((value, index) => ({
    x: index + 1,
    y: value,
  }));

  const chartDataPrevious = previous.map((value, index) => ({
    x: index + 1,
    y: value,
  }));

  const RenderNoShape = () => null;

  const customTicks = [0, chartDataCurrent.length - 1];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "600px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: "600" }}>AVG Order Value</div>
        <div>
          <span
            style={{
              color: "#10B981",
              backgroundColor: "#ECFDF5",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            +{percentageDifference}%
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "10px",
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        ₹{total}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            name="Day"
            ticks={customTicks}
            tickFormatter={(value, index) => {
              if (value === 0) {
                return fromDate;
              } else if (value === chartDataCurrent.length - 1) {
                return toDate;
              }
              return `Day ${value}`; 
            }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Value"
            tickFormatter={(value) => `₹${(value / 1000).toFixed(1)}k`}
          />
          <ZAxis range={[100]} />
          <Tooltip
            formatter={(value) => `₹${(value / 1000).toFixed(1)}k`}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
          <Legend verticalAlign="top" height={36} />
          <Scatter
            name="Current"
            data={chartDataCurrent}
            fill="#6366F1"
            line
            shape={<RenderNoShape />}
          />
          <Scatter
            name="Previous"
            data={chartDataPrevious}
            fill="#94A3B8"
            line
            shape={<RenderNoShape />}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AvgOrderValueChart;
