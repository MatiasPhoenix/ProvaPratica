import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function Dashboard() {

  return (
    <>
      <div style={myStyles.page}>
        <Header username={"Marco"} />
        <div style={myStyles.main}>
          <Sidebar />
          <section style={myStyles.metrics}>
            <div style={{ textAlign: "center" }}>
              <h1>Dashboard</h1>
              <h4>Ultimi ordini</h4>
              <ul style={myStyles.menu}>
                <li>Ordine - #Costume da bagno – €52</li>
                <li>Ordine - #Mouse – €17</li>
                <li>Ordine - #Notebook – €800</li>
                <li>...</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const myStyles: { [key: string]: React.CSSProperties } = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
  },
  menu: {
    padding: 0,
    listStyle: "none",
    lineHeight: "2em",
  },
  metrics: {
    flex: 1,
    padding: "24px",
  },
};

export default Dashboard;
