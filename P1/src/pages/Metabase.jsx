import { useMemo } from "react";

const METABASE_URL = "https://traditive-stanley-swindled.ngrok-free.dev";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjN9LCJwYXJhbXMiOnt9LCJleHAiOjE3NzM3NDM4MTAsImlhdCI6MTc3MzMxMTgwOX0.mzu1rSmYJoP-X4naZ-a1dhpxOT8aJhBeYmKz5Aq1skw";

export default function MetabaseDashboard({ darkMode }) {
  const embedUrl = useMemo(() => {
    const options = `bordered=true&titled=true${darkMode ? "&theme=night" : ""}`;
    return `${METABASE_URL}/embed/dashboard/${TOKEN}#${options}`;
  }, [darkMode]);

  return (
    <main
      style={{ width: "100%", padding: "14px 20px", boxSizing: "border-box" }}
    >
      <iframe
        title="Dashboard Metabase"
        src={embedUrl}
        frameBorder="0"
        allow="fullscreen"
        style={{
          display: "block",
          width: "100%",
          height: "calc(100vh - 146px)",
          minHeight: "520px",
          border: "0",
          borderRadius: "8px",
          background: "var(--panel-bg)",
        }}
      />
    </main>
  );
}
