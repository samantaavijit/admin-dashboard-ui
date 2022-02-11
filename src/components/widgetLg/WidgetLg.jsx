import React, { PureComponent } from "react";
import "./widgetLg.css";

export default class WidgetLg extends PureComponent {
  Button = (type) => {
    return;
  };
  render() {
    return (
      <>
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transaction</h3>
          <table className="widgetLgTable">
            {/* TABLE HEAD */}
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>

            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://avatars.githubusercontent.com/u/67010969?v=4"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Avijit Samanta</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$150</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>

            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://avatars.githubusercontent.com/u/67010969?v=4"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Avijit Samanta</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$150</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>

            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://avatars.githubusercontent.com/u/67010969?v=4"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Avijit Samanta</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$150</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

class Button extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className={"widgetLgButton " + this.props.type}>
        {this.props.type}
      </button>
    );
  }
}
