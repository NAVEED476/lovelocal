import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../styles/DirectIndircetChart.css";

const DirectIndirectChart = ({ totalSales }) => {
  const { graphData, totalSalesDirect, totalSalesIndirect } =
    totalSales.directIndirectInfo;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="chart-title">Direct VS Indirect</div>
      </div>
      <div className="sales-summary">
        <div className="amount-container">
          <div className="amount-circle"></div>
          <strong className="total-sales">
            ₹{(totalSalesDirect / 10000000).toFixed(1)}Cr
          </strong>{" "}
          <span>Direct</span>
        </div>
        <div className="amount-container">
          <div className="amount-circle1"></div>
          <strong className="total-sales">
            ₹{(totalSalesIndirect / 10000000).toFixed(1)}Cr
          </strong>{" "}
          <span>Indirect</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={graphData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
          />
          <Tooltip
            formatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
            cursor={{ fill: "rgba(0,0,0,0.1)" }}
          />
          <Bar
            dataKey="direct"
            fill="#6366F1"
            name="Direct Sales"
            barSize={15}
          />
          <Bar
            dataKey="indirect"
            fill="#38BDF8"
            name="Indirect Sales"
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DirectIndirectChart;
