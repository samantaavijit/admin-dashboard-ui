import React, { PureComponent } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default class FeaturedInfo extends PureComponent {
  render() {
    return (
      <>
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative"/>
              </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
          </div>

          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,400</span>
              <span className="featuredMoneyRate">
                -9.4 <ArrowDownward className="featuredIcon negative"/>
              </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
          </div>

          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                +23.4 <ArrowUpward className="featuredIcon"/>
              </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
          </div>
        </div>
      </>
    );
  }
}
