import React from "react";
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
import "../../styles/avgOrderValueChart.css";

const AvgOrderValueChart = ({ orderValueData }) => {
  const {
    fromDate,
    toDate,
    graphData: { current, previous },
    percentageDifference,
    total,
  } = orderValueData.averageOrderValueInfo;

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
    <div className="avg-order-chart-container">
      <div className="avg-order-chart-header">
        <div className="avg-order-chart-title">AVG Order Value</div>
      </div>

      <div className="avg-order-chart-total">
        <div>₹{total} 
        <span className="avg-order-chart-percentage">
            +{percentageDifference}%
          </span>
          </div>{" "}
        <div className="sales-summary1">
          <div className="amount-container">
            <div className="amount-circle"></div>

            <span>Direct</span>
          </div>
          <div className="amount-container">
            <div className="amount-circle1"></div>

            <span>Indirect</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={225}>
        <ScatterChart
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis
            type="number"
            dataKey="x"
            name="Day"
            ticks={customTicks}
            tickFormatter={(value) =>
              value === 0
                ? fromDate
                : value === chartDataCurrent.length - 1
                ? toDate
                : `Day ${value}`
            }
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
