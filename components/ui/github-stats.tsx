"use client";

import { Activity } from "lucide-react";
import { useState } from "react";

export const GithubStats = () => {
  const [isLoading, setIsLoading] = useState(true);

  const topLangsUrl = "https://raw.githubusercontent.com/KiriinTeo/KiriinTeo/refs/heads/main/profile/top-langs.svg";

  return (
    <div className="w-full h-full flex items-center justify-center p-2 relative z-10">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Activity className="w-6 h-6 text-slate-500 animate-pulse" />
        </div>
      )}

      <img
        src={topLangsUrl}
        alt="Estatísticas do GitHub"
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} 
      />
    </div>
  );
};

export const GithubStatsCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const statsUrl = "https://raw.githubusercontent.com/KiriinTeo/KiriinTeo/refs/heads/main/profile/stats.svg";

  return (
    <div className="w-full h-full flex items-center justify-center p-2 relative z-10">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Activity className="w-6 h-6 text-slate-500 animate-pulse" />
        </div>
      )}

      <img
        src={statsUrl}
        alt="Estatísticas do GitHub"
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} 
      />
    </div>
  );
};