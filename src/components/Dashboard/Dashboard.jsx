import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import RetailCard from "../../components/Charts/RetaileChart";
import { getSalesData, getOrderValue, getRevenue } from "../../api/api";
import DirectIndirectChart from "../Charts/DirectIndircetChart";
import AvgOrderValueChart from "../Charts/AvgOrderValueChart";
import retaileArrow from "../../assets/Retaile.png";
import customerArrow from "../../assets/customerArrow.png";
import keyAccountArrow from "../../assets/KeyAccount.png";

const Dashboard = () => {
  const [salesData, setSalesData] = useState(null);
  const [orderValueData, setOrderValueData] = useState(null);
  const [totalSales, setTotalSales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [orderValue, sales, revenue] = await Promise.all([
          getOrderValue(),
          getSalesData(),
          getRevenue(),
        ]);

        setOrderValueData(orderValue);
        setSalesData(sales);
        setTotalSales(revenue);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { customerInfo, keyAccountInfo, retailerInfo, userDetails } =
    salesData || {};

  return (
    <div className="dashboard">
      <div>
        <Sidebar />
      </div>
      <div className="content">
        <TopNavbar />
        <div style={{ margin: "30px" }}>
          <Header userDetails={userDetails} />
          <div
            className="cards-container"
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <RetailCard
              title="Retaile"
              salesInfo={retailerInfo}
              Arrow={retaileArrow}
            />
            <RetailCard
              title="Customer"
              salesInfo={customerInfo}
              Arrow={customerArrow}
            />
            <RetailCard
              title="Key Account"
              salesInfo={keyAccountInfo}
              Arrow={keyAccountArrow}
            />
          </div>
          <div style={{ display: "flex", flexWrap:"wrap" }}>
            <DirectIndirectChart totalSales={totalSales} />
            <AvgOrderValueChart orderValueData={orderValueData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
