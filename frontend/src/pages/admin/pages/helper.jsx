/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

const monthNames = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const ChartByMonth = ({ rawData ,txt}) => {
  let data = [
    {
      type: "Jan",
      val: 0,
    },
    {
      type: "Feb",
      val: 0,
    },
    {
      type: "Mar",
      val: 0,
    },
    {
      type: "Apr",
      val: 0,
    },
    {
      type: "May",
      val: 0,
    },
    {
      type: "Jun",
      val: 0,
    },
    {
      type: "July",
      val: 0,
    },
    {
      type: "Aug",
      val: 0,
    },
    {
      type: "Sept",
      val: 0,
    },
    {
      type: "Oct",
      val: 0,
    },
    {
      type: "Nov",
      val: 0,
    },
    {
      type: "Dec",
      val: 0,
    },
  ];

  for (let i = 0; i < rawData?.length; i++) {
    var createdAt = new Date(rawData[i].createdAt);
    var monthValue = createdAt.getMonth() + 1;
    const monthName = monthNames[monthValue];
    const index = data.findIndex((d) => d.type === monthName);
    if (index !== -1) {
      data[index].val++;
    }
  }
  const state = {
    series: [
      {
        name: txt||"series",
        data: data?.map((d) => d.val),
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      stroke: {
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((d) => d.type),
      },
    },
  };

  return <ReactApexChart className="w-full" options={state.options} series={state.series} />;
};
