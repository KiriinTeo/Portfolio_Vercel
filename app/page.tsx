"use client"; // Obrigatório no topo para o Framer Motion funcionar na página

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Server, ShoppingBag, Container, Activity, GitBranch } from "lucide-react";
import { motion } from "framer-motion"; // Importação do motor de animação
import { SiPython, SiSpringboot, SiDocker, SiNodedotjs, SiTypescript, SiAngular, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GithubStats, GithubStatsCard } from "@/components/ui/github-stats";

export default function Home() {
  // Lista de stacks com as cores originais (Brand Colors)
  const techStack = [
    { name: "Java", icon: <FaJava />, color: "text-[#f89820]" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6db33f]" },
    { name: "Python", icon: <SiPython />, color: "text-[#3776ab]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178c6]" },
    { name: "Angular", icon: <SiAngular />, color: "text-[#dd0031]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Docker", icon: <SiDocker />, color: "text-[#2496ed]" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]" },
  ];

  // Separando em duas linhas (5 itens na primeira, 4 na segunda) para formar o visual escalonado
  const topRow = techStack.slice(0, 5);
  const bottomRow = techStack.slice(5);

  // Configuração da animação em cascata (um ícone subindo após o outro)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50 flex flex-col">
      
      {/* SEÇÃO 1: BENTO GRID */}
      <section className="pt-20 pb-10 px-4 md:px-8">
        <BentoGrid>
          {/* Card 1: Apresentação Principal (4x2) */}
          <BentoGridItem
            className="md:col-span-4 md:row-span-2"
            title="Eduardo Teodoro"
            description={
              <>
                Engenheiro de Software Backend & Fullstack. 
                (Python e Java), integrações robustas e provisionamento Multi-Cloud (Oracle Certified).
              </>
            }
            header={
              <div className="w-full h-full min-h-[14rem] bg-zinc-950/50 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <p className="text-zinc-600 text-xs font-mono absolute z-0">
                  [Objeto 3D Interativo Entrará Aqui]
                </p>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
              </div>
            }
          />

          {/* Card 2: E-commerce (5x3) */}
          <BentoGridItem
            className="md:col-span-5 md:row-span-3"
            title="Cozy Pijamas"
            description="E-commerce Full-Stack em produção com regras de negócio dinâmicas para varejo e deploy contínuo."
            header={
              <div className="w-full h-full min-h-[6rem] bg-zinc-900 rounded-xl border border-white/5 flex flex-row items-center justify-center gap-4 relative overflow-hidden group">
                <ShoppingBag className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://cozypijamas.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/50 text-orange-500 text-xs font-semibold hover:bg-orange-500/20 transition-colors z-10"
                >
                  Ver Site ao Vivo
                </a>
              </div>
            }
          />

          {/* Card 3: Axioma Menor (4x1) - Mantido para não quebrar a sua matemática do grid */}
          <BentoGridItem
            className="md:col-span-4 md:row-span-1"
            header={
              <div className="w-full h-full min-h-[6rem] bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                 <GithubStatsCard />

                 <div className= "absolute -bottom-5 -right-5 w-20 h-20 bg-blue-500/10 blur-2xl rounded-ful" />
              </div>
            }
          />

          {/* Card 4: GitHub Stats (4x2) */}
          <BentoGridItem
            className="md:col-span-4 md:row-span-2"
            title="Linguagens Github"
            description="Métricas em tempo real extraídas da API pública do GitHub."
            header={
              <div className="w-full h-full min-h-[6rem] bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                {/* Aqui entra o nosso novo componente dinâmico */}
                <GithubStats />
                
                {/* Fundo decorativo (Glow) */}
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-500/10 blur-2xl rounded-full" />
              </div>
            }
          />

          {/* Card 5: Visu Varejo (4x2) */}
          <BentoGridItem
            className="md:col-span-4 md:row-span-2"
            title="Visu Varejo API"
            description="Backend Analítico (Java 17, Spring Boot). Hexagonal Architecture."
            header={
              <div className="w-full h-full min-h-[8rem] bg-zinc-900 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                <Server className="w-10 h-10 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
              </div>
            }
          />

          {/* Card 6: Axioma Largo (9x1) */}
          <BentoGridItem
            className="md:col-span-9 md:row-span-1"
            title="Axioma_Py - Motor de Dados"
            description="API RESTful (FastAPI) com pipeline CI/CD robusta. Foco em estabilidade e conteinerização tática com Docker Engine no Linux."
            header={
              <div className="w-full h-full min-h-[6rem] bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                 <Container className="w-8 h-8 text-slate-300 mr-4 group-hover:text-white transition-colors" />
                 <p className="text-zinc-500 text-xs font-mono group-hover:text-blue-400 transition-colors">
                    $ docker-compose up -d --build
                 </p>
              </div>
            }
          />
        </BentoGrid>
      </section>

      {/* SEÇÃO 2: MARQUEE DE TECNOLOGIAS */}
      <section className="py-24 border-y border-white/5 bg-zinc-900/20 flex justify-center">
        <div className="flex flex-col items-center gap-12 max-w-5xl w-full px-4">

          <p className="text-3xl font-bold text-zinc-300" style={{ marginBottom: '1rem' }}>
            Minhas Stacks
          </p>

          {/* Linha 1 (5 Ícones) */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {topRow.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className={`text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-sm text-zinc-400 font-mono group-hover:text-slate-200 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Linha 2 (4 Ícones) */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {bottomRow.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 5) * 0.1 }} // Atraso continua de onde a linha 1 parou
                className="flex flex-col items-center gap-4 group"
              >
                <div className={`text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-sm text-zinc-400 font-mono group-hover:text-slate-200 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SEÇÃO 3: DESTAQUE DE PROJETO (Cozy Pijamas) */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 aspect-video bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <span className="text-zinc-600 font-mono text-sm group-hover:scale-110 transition-transform">
              [Print do site Cozy Pijamas Aqui]
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
              Em Produção
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Cozy Pijamas E-commerce
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Plataforma completa de e-commerce desenvolvida com foco em alta performance e experiência do usuário. 
              A arquitetura garante um fluxo de checkout fluído, tratamento dinâmico para revendedores e integração contínua diretamente com a Vercel, refletindo atualizações do repositório instantaneamente em produção.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://cozypijamas.vercel.app/" target="_blank" className="px-6 py-2 bg-slate-100 text-zinc-950 rounded-lg font-semibold hover:bg-white transition-colors">
                Visitar Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: FOOTER (Contatos) */}
      <footer className="mt-auto py-12 border-t border-white/5 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-200">Eduardo Teodoro</h3>
            <p className="text-sm text-slate-500 mt-1">Engenheiro de Software Backend & Fullstack</p>
            <p className="text-sm text-slate-500">Americana - SP</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:eduteodoro54@gmail.com" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
              eduteodoro54@gmail.com
            </a>
            <a href="https://wa.me/5519981431891" target="_blank" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
              +55 (19) 98143-1891
            </a>
            <div className="flex gap-4 mt-2 text-slate-500">
              <a href="https://github.com/KiriinTeo" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/eduardo-sp-teodoro54/" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>  
    </main>
  );
}