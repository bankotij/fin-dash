import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { Layout } from "./components/Containers/Layout";
import { AppProvider } from "./utils/context/AppProvider";
import { Sidebar } from "./components/Navigation/Sidebar";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import Settings from "./components/Settings";
import Transactions from "./components/pages/Transactions";
import Accounts from "./components/pages/Accounts";
import Investments from "./components/pages/Investments";
import Cards from "./components/pages/Cards";
import Loans from "./components/pages/Loans";
import Services from "./components/pages/Services";
import Privileges from "./components/pages/Privileges";

function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content contentTitle="Overview" activeRoute="/" RouteComponent={<Layout />} />} />
          <Route path="/transactions" element={<Content contentTitle="Transactions" activeRoute="/transactions" RouteComponent={<Transactions />} />} />
          <Route path="/accounts" element={<Content contentTitle="Accounts" activeRoute="/accounts" RouteComponent={<Accounts />} />} />
          <Route path="/investments" element={<Content contentTitle="Investments" activeRoute="/investments" RouteComponent={<Investments />} />} />
          <Route path="/cards" element={<Content contentTitle="Cards" activeRoute="/cards" RouteComponent={<Cards />} />} />
          <Route path="/loans" element={<Content contentTitle="Loans" activeRoute="/loans" RouteComponent={<Loans />} />} />
          <Route path="/services" element={<Content contentTitle="Services" activeRoute="/services" RouteComponent={<Services />} />} />
          <Route path="/privileges" element={<Content contentTitle="Privileges" activeRoute="/privileges" RouteComponent={<Privileges />} />} />
          <Route path="/settings" element={<Content contentTitle="Settings" activeRoute="/settings" RouteComponent={<Settings />} />} />
        </Routes>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;