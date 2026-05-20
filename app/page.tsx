import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Server, ShoppingBag, Container, Activity, GitHub } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 flex items-center justify-center">
      <BentoGrid>
        {/* Card 1: Apresentação Principal (Quadrado Grande - Esquerda) */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-2"
          title="Eduardo Teodoro"
          description={
            <>
              Engenheiro de Software Backend & Fullstack. Especialista em arquiteturas modulares 
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

        {/* Card 2: E-commerce (Retângulo Horizontal - Topo Direita) */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-1"
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

        {/* Card 3: Backend (Quadrado Vertical - Meio Direita) */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-2"
          title="Visu Varejo API"
          description="Backend Analítico (Java 17, Spring Boot). Hexagonal Architecture."
          header={
            <div className="w-full h-full min-h-[8rem] bg-zinc-900 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
              <Server className="w-10 h-10 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
            </div>
          }
        />

        {/* Card 5: GitHub Stats (Quadrado Pequeno - Meio) */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1"
          title="GitHub Stats"
          description="Métricas consolidadas de repositórios públicos e TopLangs focadas em código real."
          header={
            <div className="w-full h-full min-h-[6rem] bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="flex space-x-3 items-center">
                <GitHub className="w-6 h-6 text-slate-300" />
                <Activity className="w-5 h-5 text-green-400/80 animate-pulse" />
              </div>
            </div>
          }
        />

        {/* Card 4: Infraestrutura (Retângulo Largo - Base Esquerda) */}
        <BentoGridItem
          className="md:col-span-3 md:row-span-1"
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
    </main>
  );
}