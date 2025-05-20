import React from "react";

const Header = ({ username }: { username: string }) => (
  <div style={myStyles.header}>Ciao {username}!</div>
);

const myStyles: { [key: string]: React.CSSProperties } = {
  header: {
    color: "#333",
    fontSize: "26px",
    textAlign: "left",
    fontWeight: "bold",
    padding: "16px 24px",
    backgroundColor: "#f0f0f0",
  },
};

export default Header;
