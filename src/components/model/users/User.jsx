import React, { PureComponent } from "react";
import { Visibility } from "@material-ui/icons";
import "./user.css";

export default class User extends PureComponent {
  static defaultProps = {
    username: "Avijit Samanta",
    userTitle: "Software Engineer",
    userAvatar: "https://avatars.githubusercontent.com/u/67010969?v=4",
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="widgetSmListItem">
          <img src={this.props.userAvatar} alt="" className="widgetSmImg" />
          <div className="userDetails">
            <div className="widgetSmUser">
              <div className="widgetSmUsername">{this.props.username}</div>
              <div className="widgetSmUserTitle">{this.props.userTitle}</div>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              View
            </button>
          </div>
        </div>
      </>
    );
  }
}
