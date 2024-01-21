import "./Header.css";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Header({ label }) {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <div className="Container">
      <FaBars onClick={showSiderbar} className="svgHeader" />
      {sidebar && <Sidebar active={setSidebar} />}
      {label}
      <div id="sair">
        <a href="/" style={{ color: "white" }}>
          Sair
        </a>
      </div>
    </div>
  );
}

export default Header;
