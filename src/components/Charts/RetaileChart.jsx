import React from "react";
import "../../styles/retailCard.css";
import {
  ScatterChart,
  Scatter,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const RetailCard = ({ title, salesInfo, Arrow }) => {
  const { graphData, percentageDifference, totalSales } = salesInfo;

  const chartData = graphData.map((value, index) => ({
    x: index + 1,
    y: value,
  }));

  const RenderNoShape = (props) => {
    return null;
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={Arrow} alt="Arrow Icon" />
        <div className="menu-dots">...</div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>SALES</p>
        <div className="sales-data">
          <span className="amount">${totalSales}</span>
          <span
            className={`percentage ${percentageDifference > 0 ? "up" : "down"}`}
          >
            {percentageDifference > 0 ? (
              <>+{Math.abs(percentageDifference)}%</>
            ) : (
              <>-{Math.abs(percentageDifference)}%</>
            )}
          </span>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={80}>
          <ScatterChart>
            <XAxis dataKey="x" type="number" hide={true} />
            <YAxis dataKey="y" type="number" hide={true} />
            <Tooltip formatter={(value) => `$${value}`} cursor={{ fill: "none" }} />
            <Scatter
              data={chartData}
              fill="#6366F1"
              line={{ strokeWidth: 2 }}
              r={1}
              dot={false}
              shape={<RenderNoShape />}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RetailCard;
