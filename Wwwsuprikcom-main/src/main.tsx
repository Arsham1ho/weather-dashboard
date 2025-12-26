
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "./app/App.tsx";
  import PrivacyPolicy from "./app/pages/PrivacyPolicy.tsx";
  import TermsOfService from "./app/pages/TermsOfService.tsx";
  import CookiePolicy from "./app/pages/CookiePolicy.tsx";
  import Security from "./app/pages/Security.tsx";
  import About from "./app/pages/About.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        {/* Feature pages redirect to home - these are wallet app features, not website pages */}
        <Route path="/send" element={<App />} />
        <Route path="/receive" element={<App />} />
        <Route path="/swap" element={<App />} />
        <Route path="/stake" element={<App />} />
        <Route path="/nfts" element={<App />} />
        <Route path="/activity" element={<App />} />
        {/* Catch-all redirect to home */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
