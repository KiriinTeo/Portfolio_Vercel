"use client";

import { useEffect, useState } from "react";
import { BookMarked, Users, Activity } from "lucide-react";

export const GithubStats = () => {
  // Criamos um estado para guardar os números. Começam no zero.
  const [stats, setStats] = useState({ repos: 0, followers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Bate na API pública do GitHub buscando o seu usuário
    fetch("https://api.github.com/users/KiriinTeo")
      .then((res) => res.json())
      .then((data) => {
        // Atualiza os números com os dados reais e tira o estado de "carregando"
        setStats({ repos: data.public_repos, followers: data.followers });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do GitHub", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Activity className="w-6 h-6 text-slate-500 animate-pulse" />;
  }

  return (
    <div className="flex gap-6 items-center z-10">
      <div className="flex flex-col items-center group/stat">
        <div className="flex items-center gap-2 text-slate-300 group-hover/stat:text-white transition-colors">
          <BookMarked className="w-5 h-5 text-blue-400" />
          <span className="font-mono text-xl font-bold">{stats.repos}</span>
        </div>
        <span className="text-xs text-slate-500 mt-1">Repositórios</span>
      </div>

      <div className="flex flex-col items-center group/stat">
        <div className="flex items-center gap-2 text-slate-300 group-hover/stat:text-white transition-colors">
          <Users className="w-5 h-5 text-green-400" />
          <span className="font-mono text-xl font-bold">{stats.followers}</span>
        </div>
        <span className="text-xs text-slate-500 mt-1">Seguidores</span>
      </div>
    </div>
  );
};