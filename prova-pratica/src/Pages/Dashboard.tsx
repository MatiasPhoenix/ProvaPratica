import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  const arrayNomi = [
    "Andrea",
    "Giuseppe",
    "Giovanni",
    "Francesco",
    "Davide",
    "Marco",
    "Luca",
  ];
  const [username] = React.useState(() => {
    const randomIndex = Math.floor(Math.random() * arrayNomi.length);
    return arrayNomi[randomIndex];
  });

  return (
    <>
      <div style={myStyles.page}>
        <Header username={username} />
        <div style={myStyles.main}>
          <Sidebar />
          <section style={myStyles.metrics}>
            <div style={{ textAlign: "center" }}>
              <h1>Dashboard</h1>
              <h4>Ultimi ordini</h4>
              <ul style={myStyles.menu}>
                <li>Ordine #12345 – €52</li>
                <li>Ordine #12344 – €17</li>
                <li>Ordine #12343 – €83</li>
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
