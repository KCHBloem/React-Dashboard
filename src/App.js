import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Temp from "./scenes/temp";
import Force from "./scenes/force";
import Vibration from "./scenes/vibration";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar></Sidebar>
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/temp" element={<Temp />} />
              <Route path="/force" element={<Force />} />
              <Route path="/vibration" element={<Vibration />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
