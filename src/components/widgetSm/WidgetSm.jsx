import React, { PureComponent } from "react";
import "./widgetSm.css";
import User from "../model/users/User";

export default class WidgetSm extends PureComponent {
  render() {
    return (
      <>
        <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          {/* <ul className="widgetSmList">
            <li className="widgetSmListItem">
             
            </li>
          </ul> */}
          <User
            username="Avijit Samanta"
            userTitle="Software Engineer"
            userAvatar="https://avatars.githubusercontent.com/u/67010969?v=4"
          />
          <User
            username="Nirmal Pari"
            userTitle="Content Writer"
            userAvatar="https://1.bp.blogspot.com/-SogDkTCS1ro/YTnE6tnbnkI/AAAAAAAAKVo/oExkqFO9YJoRAlNVnF1jCb_8ijMUHGWCQCPcBGAsYHg/s4160/IMG_20210815_100629_919.jpg"
          />
          <User
            username="Sanku Sahoo"
            userTitle="Project Manager"
            userAvatar="https://pbs.twimg.com/profile_images/1356817856286064640/c9K3C168_400x400.jpg"
          />
          <User
            username="Krishnendu Maity"
            userTitle="Electrical Engineer"
            userAvatar="https://1.bp.blogspot.com/-MV1GcdSzVlc/Wxamg4dKMQI/AAAAAAAAGkY/LIXPnUaSCD82Nh0r3peHPwzoAr_6aKimgCLcBGAs/s1600/20171220_075343.jpg"
          />
          <User
            username="Antik Mandal"
            userTitle="System Administrator"
            userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoMJBo0URsZI_xbBvKaRlNQUMBxyUcJWN-A&usqp=CAU"
          />
          <User
            username="Manash Pradhan"
            userTitle="React Developer"
            userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkLcH22oG1J8XBxuFvNhLQX4i9HaCqs9Rg&usqp=CAU"
          />
          <User
            username="Pijush Manna"
            userTitle="Node JS Developer"
            userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVIWiFFM23rTl4_pCrmwDOa995i01mLN7fg&usqp=CAU"
          />
        </div>
      </>
    );
  }
}
