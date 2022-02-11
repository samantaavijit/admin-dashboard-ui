import React, { PureComponent } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { UserData } from "../../dummyData";

export default class Home extends PureComponent {
  render() {
      return (
          <>
              <div className="home">
                  <FeaturedInfo />
                  <Chart data={UserData} title="Avijit Samanta" dataKey="Active User"/>
              </div>
          </>
      );
  }
}
