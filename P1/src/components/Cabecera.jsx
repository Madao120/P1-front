export default function Cabecera({ darkMode, setDarkMode }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        padding: "14px 20px",
        borderBottom: "1px solid var(--border-color)",
        background: "var(--panel-bg)",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ margin: 0 }}>Dashboard Metabase from Galvintec</h2>
      <button
        type="button"
        onClick={() => setDarkMode((value) => !value)}
        style={{
          border: "1px solid var(--border-color)",
          background: "var(--panel-bg)",
          color: "var(--text-color)",
          padding: "8px 14px",
          borderRadius: "8px",
        }}
      >
        {darkMode ? "Usar modo claro" : "Usar modo oscuro"}
      </button>
    </header>
  );
}
