import { Phone, TrendingUp, Activity, Clock, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">

    <Sidebar />
      {/* Main */}
      <main className="flex-1 p-4 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text
          ">
            Welcome to Your Content Dashboard
          </h1>
          <p className="text-sm max-w-2xl mx-auto">Manage and monitor all your AI call interactions in one place. Track call history, review conversation analytics, and customize your AI agent’s responses.</p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

          <div className="bg-linear-to-b from-[#0B0F1A] to-[#A068C1]/80 border border-gray-500 p-5 backdrop-blur-2xl rounded-xl">
            <p className="text-sm text-white flex gap-3 items-center mb-4">
              <Phone size={14} />
              Mon IA téléphonique
            </p>
            <p className="text-xs text-nowrap mb-4">Appelez directement votre agent IA</p>
            <p className="font-semibold mt-1">+33 1 59 ****</p>
            <button className="mt-4 w-full bg-linear-to-r from-[#A068C1]/80 to-[#BD3E69]/80 shadow-lg text-white py-2 rounded-lg text-sm hover:scale-105">
              Contacter l’IA
            </button>
          </div>

          <div className="bg-[#0B0F1A] border border-gray-500 backdrop-blur-2xl p-5 rounded-xl">
            <p className="text-xs text-gray-500 flex justify-between">
              <span className="">Appels aujourd’hui</span> 
              <span className="text-green-700 bg-green-200 px-1 rounded-full text-[10px] flex gap-1 text-nowrap items-center">
                <TrendingUp size={12} />
                +77%
                vs hier
              </span>
            </p>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-semibold">23</span>
            </div>
            <p className="flex gap-1 items-center text-sm text-white mt-6">
              <span>Activité de votre L'AI</span> 
              <Activity size={12} />
            </p>
            <p className="flex gap-1 items-center text-xs text-gray-500 mt-2">
              <span>Appels traités par l'agent AI</span> 
            </p>
          </div>

          <div className="bg-linear-to-b from-[#0B0F1A] to-[#BD3E69]/80 border border-gray-500 backdrop-blur-2xl  p-5 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500 flex justify-between">
              <span className="">Durée totale (minutes)</span> 
              <span className="text-green-700 bg-green-200 px-1 rounded-full text-[10px] flex gap-1 text-nowrap items-center">
                <Clock size={12} />
                minutes
              </span>
            </p>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-semibold">713</span>
            </div>
            <p className="flex gap-1 items-center text-sm text-white mt-6">
              <span>Temps Cumulée</span> 
              <Clock size={12} />
            </p>
            <p className="flex gap-1 items-center text-xs text-white/20 mt-2">
              <span>Minutes depuis le début</span> 
            </p>
          </div>

          <div className="bg-[#0B0F1A] border border-gray-500 backdrop-blur-2xl p-5 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500 flex justify-between">
              <span className="">Durée moyenne</span> 
              <span className="text-green-700 bg-green-200 px-1 rounded-full text-[10px] flex gap-1 text-nowrap items-center">
                <Clock size={12} />
                minutes
              </span>
            </p>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-semibold">0:45</span>
            </div>
            <p className="flex gap-1 items-center text-sm text-white mt-6">
              <span>Temps par conversation</span> 
              <Clock size={12} />
            </p>
            <p className="flex gap-1 items-center text-xs text-white/20 mt-2">
              <span>Durée moyenne ce mois</span> 
            </p>
          </div>
      
        </div>

        {/* Stats section */}
        <div className="bg-[#0B0F1A] border border-gray-500 backdrop-blur-2xl rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold">Statistiques des appels</h2>
              <p className="text-sm text-gray-500">
                Visualisation interactive des appels par jour
              </p>
            </div>

            <div class="paste-button">
            <button class="button px-[15px] rounded-2xl cursor-pointer py-2.5 flex items-center justify-between bg-linear-to-r from-[#A068C1]/80 to-[#BD3E69]/80 font-semibold">Derniers 3 mois &nbsp; <ChevronDown size={12} /> </button>
            <div class="dropdown-content bg-linear-to-r from-[#A068C1]/80 to-[#BD3E69]/80 p-0.5">
            <div className="bg-[#212121] rounded-2xl">
              <a id="top" href="#">Derniers 3 mois</a>
              <a id="middle" href="#">30 jours</a>
              <a id="bottom" href="#">7 jours</a>
            </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
