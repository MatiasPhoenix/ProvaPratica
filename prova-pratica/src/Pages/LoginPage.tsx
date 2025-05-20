import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email,    setEmail]    = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={myStyles.container}>
      <h1 style={myStyles.title}>Login</h1>
      <form onSubmit={handleSubmit} style={myStyles.form}>
        <div style={myStyles.field}>
          <label htmlFor="email" style={myStyles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={myStyles.input}
          />
        </div>

        <div style={myStyles.field}>
          <label htmlFor="password" style={myStyles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={myStyles.input}
          />
        </div>

        <button type="submit" style={myStyles.button}>
          Accedi
        </button>
      </form>
    </div>
  );
}

// CSS STYLES local
const myStyles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    paddingInline: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "18px",
  },
};
