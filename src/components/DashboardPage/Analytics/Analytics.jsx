import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardAnalytics = () => {
  // Chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Reports Submitted",
        data: [320, 450, 280, 510, 490, 620],
        backgroundColor: "rgba(18, 153, 144, 0.7)",
        borderColor: "#129990",
        borderWidth: 1
      },
      {
        label: "Resolved Cases",
        data: [210, 380, 200, 400, 420, 550],
        backgroundColor: "rgba(76, 175, 80, 0.7)",
        borderColor: "#4CAF50",
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Metrics data
  const metrics = [
    { value: "24m", label: "Avg. Response Time", delta: "+2.4%", trend: "up" },
    { value: "89%", label: "Satisfaction Rate", delta: "+5.1%", trend: "up" },
    { value: "1.2k", label: "Active Cases", delta: "-3.2%", trend: "down" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#129990" }}>
            Performance Analytics
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Real-time insights and historical trends to optimize civic management
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Chart Column */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 bg-white rounded-3 shadow-sm h-100">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Metrics Column */}
          <div className="col-lg-4">
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="col-md-6 col-lg-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.15
                  }}
                >
                  <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h3 className="h2 fw-bold mb-1" style={{ color: "#129990" }}>
                          {metric.value}
                        </h3>
                        <p className="mb-0 text-muted">{metric.label}</p>
                      </div>
                      <span 
                        className={`badge rounded-pill ${
                          metric.trend === "up" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {metric.delta}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardAnalytics;