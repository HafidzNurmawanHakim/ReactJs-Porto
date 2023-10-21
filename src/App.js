import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { About, Main, Skills, WorkPage } from "./components";
import PreLoader from "./subComponents/PreLoader";
import Wa from "./subComponents/Wa";
import { LightTheme } from "./theme/theme";
function App() {
  const location = useLocation();
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <ThemeProvider theme={LightTheme}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={load ? <PreLoader /> : <Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/wa" element={<Wa />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
