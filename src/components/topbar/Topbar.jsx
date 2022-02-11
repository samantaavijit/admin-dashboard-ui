import React, { PureComponent } from "react";
import "./topbar.css";
import { NotificationsNone,Language,Settings } from "@material-ui/icons";

export default class Topbar extends PureComponent {
  render() {
    return (
      <>
        <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">Admin Pannel</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/67010969?v=4" alt="App Logo" className="topAvatar"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
