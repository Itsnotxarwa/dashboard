import { useState } from "react";
import { X, LayoutDashboard, ChartColumn, Bot, Settings, LogOut, Search } from "lucide-react";


export default function Sidebar() {
    const [active, setActive] = useState("dashboard");

    const handleNavClick = (name) => {
        setActive(name);
    };

    const links = [
        { name: "dashboard", label: "Tableau de bord", icon: <LayoutDashboard size={20} /> },
        { name: "history", label: "Historique des appels", icon: <ChartColumn size={20} /> },
        { name: "bot", label: "Mon IA téléphonique", icon: <Bot size={20} /> },
        { name: "settings", label: "Réglages", icon: <Settings size={20} /> },
    ];


    return(

            <div className="border border-r border-gray-50/30">
            <aside className="flex flex-col w-64 px-8 h-full bg-black/90
            py-4 transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-center p-6 relative">
                    <h1 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                        <span>MAZIA</span>
                    </h1>
                </div>

                <div class="group realtive mb-8">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                        <g>
                            <path
                            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input
                    id="query"
                    className="input border-b border-gray-50/30 focus:border-[#A068C1]"
                    type="search"
                    placeholder="Rechercher…"
                    name="searchbar"
                    />
                    <div className="ui-input-highlight"></div>
                </div>
                
                <div className="h-full flex flex-col justify-between">
                <nav className="space-y-2">
                    {links.map((link) => (
                        <a
                        key={link.name}
                        className={`flex text-left transition-all duration-300 transform cursor-pointer
                            gap-3 px-4 py-2 text-nowrap text-sm
                            ${active === link.name ? "text-white font-medium bg-white/20" : "text-gray-300 hover:bg-white/20 hover:scale-105"}`}
                        onClick={() => handleNavClick(link.name)}
                        >
                            {link.icon}
                            <span className="transition-all duration-300 ease-in-out ">{link.label}</span>
                        </a>
                    ))}
                </nav>
                
                <div className="flex items-center justify-center text-white">
                    <a className="flex gap-2 flex-col items-center justify-center  rounded-xl text-left transition-all duration-300
                    transform cursor-default mb-2">
                        <LogOut size={20} />
                        <span>
                            Se déconnecter
                        </span>
                    </a>
                </div>
                </div>
            </aside>
            </div>

    )
}