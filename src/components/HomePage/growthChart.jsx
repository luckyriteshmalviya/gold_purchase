import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart, Tooltip, registerables } from "chart.js";
import AppContext from "../../context/context";
import classNames from "classnames";

// Register Chart.js components
Chart.register(...registerables);

const GrowthChart = (props) => {
  const appCtx = useContext(AppContext);
  const [chartData, setChartData] = useState(null);
  const [randomUpdate, setRandomUpdate] = useState(null);
  const [tooltipUpdate, setTooltipUpdate] = useState(false); // State to trigger tooltip update
  // eslint-disable-next-line
  const [filter, setFilter] = useState("yearly"); // State for filter type
  const [intervalInYearly, setIntervalInYearly] = useState(5); // State for yearly interval

  const activeCollection = appCtx.getActiveCollection(); // Get active collection from context
  const monthlyRate = 0.833; // Monthly growth rate assuming 10% annual growth
  const monthlyInvestment = activeCollection ? activeCollection.totalPrice : 0; // Monthly investment amount
  const staticIntervalFilters = [2, 4, 6, 8]; // Static interval filters for buttons
  const intervals = {
    yearly: intervalInYearly, // Yearly intervals
  };

  // Function to generate random fluctuation in investment data
  const getRandomFluctuation = () => {
    const maxFluctuation = 0.1;
    return (Math.random() * 2 - 1) * maxFluctuation;
  };

  // Function to generate investment data based on filter type
  const generateInvestmentData = (filterType) => {
    let legends = intervals[filterType];
    let cumulativeInvestment = 0;
    const investmentValues = [];

    for (let i = 0; i < legends; i++) {
      const rateWithFluctuation = monthlyRate + getRandomFluctuation();
      cumulativeInvestment =
        (cumulativeInvestment + monthlyInvestment) * (1 + rateWithFluctuation);
      investmentValues.push(cumulativeInvestment.toFixed(2));
    }

    return investmentValues;
  };

  // Function to generate labels based on filter type
  const generateLabels = (filterType) => {
    const length = intervals[filterType];
    return Array.from({ length }, (_, i) => i + 1);
  };

  // Function to set year based on value
  const setYear = (val) => {
    if (val === 2) return 2;
    if (val === 3) return 4;
    if (val === 4) return 6;
    if (val === 5) return 8;
  };

  const calcInvestmentDataForChart = () => {
    const investmentValues = generateInvestmentData(filter);
    const labels = generateLabels(filter);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "",
          data: investmentValues,
          borderColor: "#2B2B2B",
          borderWidth: 2,
          fill: false,
        },
      ],
    };
    setChartData(data);
    setTooltipUpdate(true); // Trigger tooltip update
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomUpdate(Math.random().toString(36));
    }, 4000); // chart growth random fluctuation in every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    calcInvestmentDataForChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, activeCollection, intervalInYearly, randomUpdate]);

  // Format number to thousands
  function formatNumber(number) {
    if (isNaN(number)) {
      return "Invalid Number";
    }

    if (number >= 1e12) {
      return (number / 1e12).toFixed(1) + "t";
    } else if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "b";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  }

  const showTooltipAtLastPoint = {
    id: "showTooltipAtLastPoint",

    afterDraw: (chart) => {
      const tooltip = chart.tooltip;

      if (!tooltip._active || !tooltip._active.length || tooltipUpdate) {
        const meta = chart.getDatasetMeta(0);

        const lastPoint = meta.data[meta.data.length - 1];

        tooltip.setActiveElements(
          [{ datasetIndex: 0, index: meta.data.length - 1 }],

          { x: lastPoint.x, y: lastPoint.y }
        );

        tooltip.options.positioner = function (elements, eventPosition) {
          return {
            x: eventPosition.x + 80,
            y: lastPoint.y + 80, // Adjust this value to move the tooltip further away
          };
        };
        chart.update();

        setTooltipUpdate(false); // Reset tooltip update trigger
      }
    },
  };

  Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
    return {
      x: eventPosition.x,
      y: eventPosition.y - 6,
      // You may also include xAlign and yAlign to override those tooltip options.
    };
  };
  return (
    <div
      className={classNames(
        "font-sans max-w-full flex flex-col justify-between items-center p-4 pt-[21px] px-[18px] bg-white rounded-lg border-2px mt-0",
        {
          "shadow-md": !props.quickView,
          border: !props.quickView,
          "mb-6": !props.quickView,
        }
      )}
    >
      <div className={"w-full flex flex-row items-start justify-between mb-10"}>
        <div className={"flex flex-col space-y-2 max-w-[62%]"}>
          {/* Collection name and growth title */}
          <h1
            className={
              "text-xl sm:text-[23px] font-normal leading-[29px] whitespace-nowrap overflow-hidden text-ellipsis"
            }
          >
            {activeCollection.collectionName} Growth
          </h1>
          {/* Subtitle */}
          <h3
            className={
              "text-[12.5px] sm:text-[15px] font-normal text-[#999999] sm:text-base leading-[20px] !mt-0"
            }
          >
            Based on your contribution history
          </h3>
        </div>
      </div>

      <div className="w-full">
        {/* Render line chart */}
        {chartData && (
          <Line
            data={chartData}
            options={{
              layout: {
                padding: {
                  top: 36,
                  right: 38,
                },
              },
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              plugins: {
                legend: {
                  display: false, // Hide legend
                },
                tooltip: {
                  enabled: true,
                  mode: "nearest",
                  caretSize: 0,
                  intersect: false,
                  yAlign: "bottom", // Align tooltip at the top
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      if (label) {
                        label += ": ";
                      }
                      label += formatNumber(context.raw);
                      return `₹ ${label}`;
                    },
                    title: function (context) {
                      return "";
                    },
                    labelTextColor: function () {
                      return "#FFFFFF";
                    },
                  },
                  displayColors: false,
                  backgroundColor: "#FD889A",
                  titleFont: {
                    family: "Arial",
                    size: 2,
                    weight: "normal",
                    lineHeight: 1.2,
                    display: "none",
                  },
                  bodyFont: {
                    family: "Lexend",
                    size: 15,
                    align: "center",
                    weight: "400",
                    lineHeight: 1.2,
                  },
                  padding: 6,
                  cornerRadius: 16,
                  position: "myCustomPositioner",
                  afterUpdate: function (chart) {
                    setTooltipUpdate(true); // Trigger tooltip update after chart update
                  },
                },
              },
              elements: {
                point: {
                  radius: 4, // Adjust dot size
                  backgroundColor: "white", // Change dot color
                  borderWidth: 2.18, // Dot border width
                  pointBorderColor: "#71DEDE",
                },
                line: {
                  width: "15px",
                  tension: 0.4, // Adjust the tension here (0 means no curves)
                },
              },
              events: ["click"],
            }}
            type="line"
            plugins={[showTooltipAtLastPoint]}
          />
        )}
      </div>

      <div className="w-full py-5">
        {/* Interval selection buttons */}
        <div
          className={
            "flex flex-row align-center font-medium leading-none h-[10px] items-center justify-between"
          }
        >
          <button>Today</button>
          {/* Render interval buttons */}
          {staticIntervalFilters.map((val, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (val === 2) return setIntervalInYearly(2);
                  if (val === 4) return setIntervalInYearly(3);
                  if (val === 6) return setIntervalInYearly(4);
                  if (val === 8) return setIntervalInYearly(5);
                }}
                className={classNames(
                  "rounded hover:bg-[#FFD6DA] hover:shadow-md text-[12px] sm:text-[12px] p-1 sm:p-2",
                  {
                    "bg-[#FFD6DA]": val === setYear(intervalInYearly),
                  }
                )}
              >
                {val}y
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;
