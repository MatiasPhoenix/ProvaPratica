import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

interface Order {
  prodName: string;
  dateOrder: number;
  state: "spedito" | "consegnato" | "in lavorazione";
}
function OrderPage() {
  const [orders] = useState<Order[]>([
    { prodName: "Zaino", dateOrder: Date.now() - 86400000, state: "spedito" },
    { prodName: "Mouse", dateOrder: Date.now(), state: "consegnato" },
    {
      prodName: "Libro",
      dateOrder: Date.now() - 3 * 86400000,
      state: "in lavorazione",
    },
    {
      prodName: "Notebook",
      dateOrder: Date.now() - 8 * 86400000,
      state: "consegnato",
    },
    {
      prodName: "Costume da bagno",
      dateOrder: Date.now() - 192800000,
      state: "in lavorazione",
    },
    {
      prodName: "Pneumatico bicicletta",
      dateOrder: Date.now() - 131000000,
      state: "spedito",
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("tutti");
  const [selectedDateRange, setSelectedDateRange] = useState("tutti");

  const filteredOrders = orders.filter((order) => {
    const now = Date.now();

    const statusMatch =
      selectedStatus === "tutti" || order.state === selectedStatus;

    const dateMatch =
      selectedDateRange === "tutti" ||
      (selectedDateRange === "2giorni" &&
        now - order.dateOrder <= 2 * 86400000) ||
      (selectedDateRange === "7giorni" &&
        now - order.dateOrder <= 7 * 86400000);

    return statusMatch && dateMatch;
  });

  return (
    <>
      <div style={myStyles.page}>
        <Header username={"Marco"} />
        <div style={myStyles.main}>
          <Sidebar />
          <section style={myStyles.metrics}>
            <div style={{ textAlign: "center" }}>
              <h1>Lista ordini</h1>
              <label style={{ paddingRight: "20px" }}>
                
                Filtra per stato:
                <select
                  style={{ padding: "5px" }}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="tutti">Tutti</option>
                  <option value="spedito">Spedito</option>
                  <option value="consegnato">Consegnato</option>
                  <option value="in lavorazione">In lavorazione</option>
                </select>
              </label>
              <label>
                Filtra per data:
                <select
                  style={{ padding: "5px" }}
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                >
                  <option value="tutti">Tutti</option>
                  <option value="2giorni">Ultimi 2 giorni</option>
                  <option value="7giorni">Ultima settimana</option>
                </select>
              </label>
              <ul>
                {filteredOrders.length === 0 && <p>Nessun ordine trovato</p>}
                {filteredOrders.map((order, index) => (
                  <li key={index} style={myStyles.product}>
                    <p>
                      <strong>{order.prodName}</strong>
                    </p>
                    <p>Stato: {order.state}</p>
                    <p>
                      Data ordine:{" "}
                      {new Date(order.dateOrder).toLocaleDateString()}
                    </p>
                  </li>
                ))}
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
  menu: {},
  metrics: {
    flex: 1,
    padding: "24px",
  },
  product: {
    border: "1px solid #ccc",
    marginBottom: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    listStyle: "none",
    lineHeight: "2em",
  },
};

export default OrderPage;
