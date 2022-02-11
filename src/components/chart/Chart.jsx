import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";

export default class Chart extends PureComponent {
  static defaultProps = {
    title: "User Analytics",
    dataKey: "Active User",
    data: [
      {
        name: "Jan",
        "Active User": 4000,
      },
      {
        name: "Feb",
        "Active User": 1500,
      },
      {
        name: "Mar",
        "Active User": 3000,
      },
      {
        name: "Apr",
        "Active User": 1000,
      },
    ],
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="chart">
          <h3 className="chartTitle">{this.props.title}</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={this.props.data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey="Active User" />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}
