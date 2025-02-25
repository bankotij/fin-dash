import { HomeIcon, SettingsIcon } from "lucide-react"

/*
  TODO:
  1. Move to reusable components
  2. Verify CSS
  3. Add toggle for sidebar on mobile.
*/
export function Sidebar() {
  return <>
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
          <li>
                <a href="#" className="flex duration-75 text-black items-center p-2 rounded-lg hover:bg-black hover:text-white group">
                  <div className="transition duration-75 text-black group-hover:text-white " aria-hidden="true">
                    <HomeIcon />
                  </div>
                  <span className="ms-3 ">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex duration-75 text-black items-center p-2 rounded-lg hover:bg-black hover:text-white group">
                  <div className="transition duration-75 text-black group-hover:text-white " aria-hidden="true">
                    <SettingsIcon />
                  </div>
                  <span className="ms-3 ">Settings</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>
  </>
}