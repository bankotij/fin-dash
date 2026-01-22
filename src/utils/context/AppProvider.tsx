import { createContext, useState } from "react";

export interface SidebarContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  activeRoute: string;
  setActiveRoute: (value: string) => void;
  toggleSidebar: () => void;
}

export interface AppContextProps {
  sidebarContext: SidebarContextProps;
}

const defaultAppContext: AppContextProps = {
  sidebarContext: {
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
    activeRoute: "/",
    setActiveRoute: () => {},
    toggleSidebar: () => {},
  },
};

const AppContext = createContext(defaultAppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");

  const toggleSidebar = () => {
    setIsSidebarOpen((current) => !current);
  };

  const sidebarContext = {
    isSidebarOpen,
    setIsSidebarOpen,
    activeRoute,
    setActiveRoute,
    toggleSidebar,
  };

  return (
    <AppContext.Provider value={{ sidebarContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };