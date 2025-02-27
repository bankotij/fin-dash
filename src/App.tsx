import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { Layout } from "./components/Containers/Layout";
import { AppProvider } from "./utils/context/AppProvider";
import { Sidebar } from "./components/Navigation/Sidebar";
import Settings from "./components/Settings";

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Content contentTitle="Overview" activeRoute="/" RouteComponent={<Layout />} />} />
        <Route path="/settings" element={<Content contentTitle="Settings" activeRoute="/settings" RouteComponent={<Settings />}/>} />
      </Routes>
    </AppProvider>
  );
}

export default App;