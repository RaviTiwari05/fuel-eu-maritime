import { useState } from "react";
import Tabs from "./adapters/ui/components/Tabs";
import RoutesPage from "./adapters/ui/pages/RoutesPage";
import ComparePage from "./adapters/ui/pages/ComparePage";
import BankingPage from "./adapters/ui/pages/BankingPage";
import PoolingPage from "./adapters/ui/pages/PoolingPage";

function App() {
  const [tab, setTab] = useState("routes");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Tabs tab={tab} setTab={setTab} />

      {tab === "routes" && <RoutesPage />}
      {tab === "compare" && <ComparePage />}
      {tab === "banking" && <BankingPage />}
      {tab === "pooling" && <PoolingPage />}
    </div>
  );
}

export default App;
