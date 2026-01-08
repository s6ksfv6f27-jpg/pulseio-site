export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "system-ui"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Pulseio
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
        Infrastructure for intelligent systems
      </p>
    </main>
  );
}
