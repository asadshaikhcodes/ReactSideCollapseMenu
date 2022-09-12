import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  FaHome,
  FaBox,
  FaBookmark,
  FaCommentDots,
  FaFlag,
  FaPagelines,
  FaList,
  FaUser,
  FaBell,
  FaCircle,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

const headerImg = require("../images/ct_logo.png");

const sampleData = [
  { iconName: <FaHome />, title: "Dasboard" },
  { iconName: <FaBox />, title: "Models" },
  { iconName: <FaBookmark />, title: "Bookmarks" },
  { iconName: <FaCommentDots />, title: "Issues" },
  { iconName: <FaFlag />, title: "Milestones" },
  { iconName: <FaCommentDots />, title: "Labels" },
  { iconName: <FaPagelines />, title: "Documents" },
  { iconName: <FaList />, title: "Libraries" },
  { iconName: <FaUser />, title: "Members" },
  { iconName: <FaBell />, title: "Notifications" },
  { iconName: <FaCircle />, title: "Settings" },
];

function Menu() {
  const [expanded, setExpanded] = useState(false);

  const menuStyles = {
    sidebarStyles: {
      width: expanded ? "200px" : "60px",
      height: "100%",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #eee",
      //   justifyContent: "space-between",
    },
    headerStyles: {
      // margin: "0 0 auto 0",
      height: "40px",
      borderBottom: "1px solid #eee",
      maxWidth: "100%",
      display: "flex",
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: expanded ? "15px" : "0px",
      alignItems: "center",
      justifyContent: expanded ? "start" : "center",
    },
    sideBarIconContainer: {
      listStyle: "none",
      padding: "0",
      width: "100%",
    },
    liCollapsedStyles: {
      color: "#8c8c8c",
      fontSize: "18px",
      marginBottom: "15px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    liExpandedStyles: {
      color: "#8c8c8c",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      paddingLeft: "20px",
      maxHeight: "20px",
    },
  };

  function MenuExpanded() {
    return (
      <div style={{ height: "100%", borderRight: "2px solid #eee" }}>
        <div style={menuStyles.sidebarStyles}>
          <div style={menuStyles.headerStyles}>
            <img src={headerImg} height="30px" width={"30px"} />
            <h3 style={{ marginLeft: "5px" }}>CodeDesk</h3>
          </div>
          <ul style={menuStyles.sideBarIconContainer}>
            {sampleData.map((data) => {
              return (
                <li
                  style={menuStyles.liExpandedStyles}
                  className="menuList"
                  key={data.title}
                >
                  {data.iconName}
                  <h5 style={{ marginLeft: "10px" }}>{data.title}</h5>
                </li>
              );
            })}
          </ul>
          <div
            style={{
              width: "100%",
              marginTop: "auto",
              textAlign: "center",
              color: "#1890ff",
              fontSize: "30px",
              cursor: "pointer",
              borderTop: "1px solid #eee",
              paddingTop: "5px",
              paddingBottom: "4px",
            }}
          >
            <FaArrowAltCircleLeft onClick={() => setExpanded(false)} />
          </div>
        </div>
      </div>
    );
  }

  function MenuCollapsed() {
    return (
      <div style={{ height: "100%" }}>
        <div style={menuStyles.sidebarStyles}>
          <div style={menuStyles.headerStyles}>
            <img src={headerImg} height="40px" width={"40px"} />
          </div>
          <ul style={menuStyles.sideBarIconContainer}>
            {sampleData.map((data) => {
              return (
                <li
                  style={menuStyles.liCollapsedStyles}
                  className="menuList"
                  key={data.title}
                >
                  {data.iconName}
                </li>
              );
            })}
          </ul>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "#1890ff",
              fontSize: "30px",
              cursor: "pointer",
              borderTop: "1px solid #eee",
              paddingTop: "5px",
              paddingBottom: "4px",
              marginTop: "auto",
            }}
          >
            <FaArrowAltCircleRight onClick={() => setExpanded(true)} />
          </div>
        </div>
      </div>
    );
  }

  return expanded ? <MenuExpanded /> : <MenuCollapsed />;
}

export default Menu;
