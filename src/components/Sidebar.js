import { FaHome, FaTimes } from "react-icons/fa";
import "./Sidebar.css";

import { MdNewLabel } from "react-icons/md";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div className="ContainerSD" sidebar={active}>
      <FaTimes onClick={closeSidebar} className="svgMenu" />
      <div className="content">
        <a href="/home">
          <SidebarItem Icon={FaHome} Text="Home" />
        </a>
        <a href="/etiqueta">
          <SidebarItem Icon={MdNewLabel} Text="Etiqueta" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
