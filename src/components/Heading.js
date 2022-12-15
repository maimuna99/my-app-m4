import React from "react";
// import styles from "./H1.module.scss";

const Header = ({ children, level }) => {
    const TAG = `h${level}`;
  
    return (
      <TAG role="Header">
        {children}
      </TAG>
    );
  }
  export default Header;
  
//   <h2 role="header">sdfsdf</h2>