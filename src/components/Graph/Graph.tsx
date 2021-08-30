import React, { FC, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Category } from "../../types";
import { Container } from './Graph.styled'

const mapToColor = (category: Category) => {
  const mapColor = {
    [Category.Clothes]: '#FF8800',
    [Category.Gifts]: '#FFFF00',
    [Category.Groceries]: '#99FF00',
    [Category.Invoice]: '#00FF44',
    [Category.Misc]: '#00FFFF',
    [Category.Phone]: '#119EED',
    [Category.Rent]: '#112DED',
    [Category.Social]: '#ff00EE',
    [Category.Travel]: '#8800ff',
    [Category.Utilities]: '#FF0000',
  }
  return mapColor[category]
}

const getColors = (categories: Category[]) => {
  const colors: string[] = categories.map(mapToColor);

  return colors;
}

const Graph: FC<{ categories: Category[]; data: number[] }> = ({
  categories,
  data,
}) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const newData: Chart.ChartData = {
      labels: categories,
      datasets: [
        
        {
          data,
          borderWidth: 2,
          backgroundColor: getColors(categories),
          borderColor: "transparent",
        },
      ],
    };
    setChartData(newData);
  }, [categories, data]);
  return (
    <Container>
      <h2>Spending per category (£)</h2>
      <Doughnut data={chartData} />
    </Container>
  );
};

export default Graph;
