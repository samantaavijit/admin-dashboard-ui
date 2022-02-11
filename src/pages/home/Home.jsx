import React, { PureComponent } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

export default class Home extends PureComponent {
  render() {
      return (
          <>
              <div className="home">
                  <FeaturedInfo/>
              </div>
          </>
      );
  }
}
