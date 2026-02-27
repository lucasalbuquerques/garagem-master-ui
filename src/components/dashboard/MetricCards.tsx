import { ClipboardList, DollarSign, Users, Car, TrendingUp, TrendingDown } from "lucide-react";
import { metricas } from "@/data/mockData";

const cards = [
  {
    titulo: "Ordens Abertas",
    valor: metricas.ordensAbertas.valor.toString(),
    variacao: metricas.ordensAbertas.variacao,
    icon: ClipboardList,
    color: "primary",
    iconBg: "bg-primary/10 text-primary dark:bg-primary/15",
    accentLine: "from-primary to-primary/40",
  },
  {
    titulo: "Faturamento do Mês",
    valor: metricas.faturamentoMes.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    variacao: metricas.faturamentoMes.variacao,
    icon: DollarSign,
    color: "success",
    iconBg: "bg-success/10 text-success dark:bg-success/15",
    accentLine: "from-success to-success/40",
  },
  {
    titulo: "Clientes Ativos",
    valor: metricas.clientesAtivos.valor.toString(),
    variacao: metricas.clientesAtivos.variacao,
    icon: Users,
    color: "accent",
    iconBg: "bg-accent/10 text-accent dark:bg-accent/15",
    accentLine: "from-accent to-accent/40",
  },
  {
    titulo: "Veículos Cadastrados",
    valor: metricas.veiculosCadastrados.valor.toString(),
    variacao: metricas.veiculosCadastrados.variacao,
    icon: Car,
    color: "chart-5",
    iconBg: "bg-chart-5/10 text-chart-5 dark:bg-chart-5/15",
    accentLine: "from-chart-5 to-chart-5/40",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div
          key={card.titulo}
          className="stat-card glass-card group cursor-pointer"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {/* Top accent line */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.accentLine} opacity-60 group-hover:opacity-100 transition-opacity`} />

          <div className="relative flex items-start justify-between">
            <div className="space-y-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{card.titulo}</p>
              <p className="text-[26px] font-display font-bold text-foreground leading-none tracking-tight">{card.valor}</p>
              <div className="flex items-center gap-1.5 text-xs">
                <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-md font-semibold ${
                  card.variacao > 0
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {card.variacao > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {card.variacao > 0 ? "+" : ""}{card.variacao}%
                </div>
                <span className="text-muted-foreground/60 text-[11px]">vs mês anterior</span>
              </div>
            </div>
            <div className={`p-3 rounded-2xl ${card.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
              <card.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
