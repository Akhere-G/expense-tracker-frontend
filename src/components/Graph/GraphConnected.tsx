import React from "react";
import Graph from "./Graph";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Category, Transaction } from "../../types";

interface GraphData {
  [key: string]: number;
}

const getGraphData = (transactions: Transaction[]) => {
  const graphData = transactions.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += Number(curr.amount);
      return acc;
    }
    acc[curr.category] = Number(curr.amount);
    return acc;
  }, {} as GraphData);

  const categories = Object.keys(graphData) as Category[];
  const data = Object.values(graphData);

  return { categories, data };
};

const GraphConnected = () => {
  const { transactions } = useSelector((state: RootState) => state.transaction);

  const { categories, data } = getGraphData(transactions);
  return <Graph categories={categories} data={data} />;
};

export default GraphConnected;
