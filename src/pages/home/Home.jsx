import React, { PureComponent } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { UserData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <div className="home">
          <FeaturedInfo />
          <Chart data={UserData} title="Avijit Samanta" dataKey="Active User" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </>
    );
  }
}
