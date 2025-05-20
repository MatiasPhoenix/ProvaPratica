import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/user");
  };
  const handleOrders = () => {
    navigate("/order");
  };

  return (
    <aside style={myStyles.sidebar}>
      <ul style={myStyles.menu}>
        <li style={myStyles.button} onClick={handleProfile}>
          Profilo
        </li>
        <li style={myStyles.button} onClick={handleOrders}>
          Ordini
        </li>
        <li style={myStyles.button}>Impostazioni</li>
      </ul>
    </aside>
  );
};

const myStyles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "200px",
    padding: "16px",
    backgroundColor: "grey",
  },
  menu: {
    lineHeight: "4em",
  },
  button: {
    color: "black",
    fontSize: "22px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Sidebar;
