import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import MenuList from "./Table1/MenuList.js";
import MenuList2 from "./Table2/MenuList2.js";
import MenuList3 from "./Table3/MenuList3.js";
import BillMenu from "./BillMenu.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <MenuList />
    {/* <div id="displayTables">
      <MenuList />
      <MenuList2 />
      <MenuList3></MenuList3>
    </div> */}
    {/* <BillMenu></BillMenu> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
