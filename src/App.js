import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/TopBar";
import Sidebar from "./screens/global/SideBar";
import VisaApplicants from "./screens/pages/VisaApplicants";
import Interpol from "./screens/pages/Interpol";
import VisaPayments from "./screens/pages/VisaPayments";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Geography from "./components/Geography";
import Dashboard from "./screens/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/visa-applicants" element={<VisaApplicants />} />
                <Route path="/interpol-verify" element={<Interpol />} />
                <Route path="/visa-payments" element={<VisaPayments />} />
                <Route path="/analytics/bar-chart" element={<BarChart />} />
                <Route path="/analytics/pie-chart" element={<PieChart />} />
                <Route
                  path="/analytics/geography-chart"
                  element={<Geography />}
                />
              </>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
