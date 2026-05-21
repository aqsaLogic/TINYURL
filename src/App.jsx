import { useState } from "react";
import TinyURLPage from "./TinyURL.jsx";
import PlansPage from "./pages/Planspage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import DomainsPage from "./pages/DomainsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  if (page === "plans")  return <PlansPage  onNavigate={navigate} />;
  if (page === "features")  return <FeaturesPage  onNavigate={navigate} />;
  if (page === "domains")  return <DomainsPage   onNavigate={navigate} />;
  if (page === "resources") return <ResourcesPage onNavigate={navigate} />;

  return <TinyURLPage onNavigate={navigate} />;
}
