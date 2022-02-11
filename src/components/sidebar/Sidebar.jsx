import React, { PureComponent } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Report,
  WorkOutline,
  MailOutline,
  ChatBubbleOutline,
  DynamicFeed,
  BarChart,
  AttachMoney,
  Storefront,
} from "@material-ui/icons";

export default class Sidebar extends PureComponent {
  render() {
    return (
      <>
        <div className="sidebar">
          <div className="sidebarWrapper">
            {/* DASHBOARD */}
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Sales
                </li>
              </ul>
            </div>

            {/* QUICK MENU */}
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <PersonOutline className="sidebarIcon" />
                  User
                </li>
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Transaction
                </li>
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>

            {/* NOTIFICATION */}
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notification</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MailOutline className="sidebarIcon" />
                  Mail
                </li>
                <li className="sidebarListItem">
                  <DynamicFeed className="sidebarIcon" />
                  Feedback
                </li>
                <li className="sidebarListItem">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Messages
                </li>
              </ul>
            </div>

            {/* STAFF */}
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
