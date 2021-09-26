import React, { FC, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Container } from "./Graph.styled";

const mapToColor = (categories: string[]) =>
  categories.map((category, index) => {
    const options = categories.length;
    const diffInHue = 360 / options;
    const hue = (index % options) * diffInHue;

    return `hsl(${hue}, 100%, 60%)`;
  });

const getColors = (categories: string[]) => {
  const colors: string[] = mapToColor(categories);

  return colors;
};

const Graph: FC<{ categories: string[]; data: number[] }> = ({
  categories,
  data,
}) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const newData = {
      labels: categories,
      datasets: [
        {
          data,
          borderWidth: 1,
          backgroundColor: getColors(categories),
        },
      ],
    };
    setChartData(newData);
  }, [categories, data]);

  if (data.length === 0) {
    return <></>;
  }
  return (
    <Container>
      <h2>Spending per category (£)</h2>
      <Doughnut
        data={chartData}
        width={300}
        height={40}
        options={{ maintainAspectRatio: true, responsive: true }}
      />
    </Container>
  );
};

export default Graph;
