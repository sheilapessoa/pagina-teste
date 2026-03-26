body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  background: #0f172a;
  color: #e2e8f0;
}

/* SIDEBAR */
.sidebar {
  width: 240px;
  height: 100vh;
  background: #020617;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
}

.sidebar button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  background: transparent;
  border: none;
  color: #cbd5f5;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar button:hover {
  background: #1e293b;
  border-radius: 8px;
}

/* MAIN */
.main {
  flex: 1;
}

/* TOPBAR */
.topbar {
  padding: 15px;
  background: #020617;
  border-bottom: 1px solid #1e293b;
}

/* CONTENT */
.content {
  padding: 20px;
}

/* CARDS */
.card {
  background: #020617;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
