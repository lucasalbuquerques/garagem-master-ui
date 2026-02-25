import { ClipboardList, DollarSign, Users, Car, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { metricas } from "@/data/mockData";

const cards = [
  {
    titulo: "Ordens Abertas",
    valor: metricas.ordensAbertas.valor.toString(),
    variacao: metricas.ordensAbertas.variacao,
    icon: ClipboardList,
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15 text-primary",
    glowClass: "hover:shadow-primary/10",
  },
  {
    titulo: "Faturamento do Mês",
    valor: metricas.faturamentoMes.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    variacao: metricas.faturamentoMes.variacao,
    icon: DollarSign,
    gradient: "from-success/20 to-success/5",
    iconBg: "bg-success/15 text-success",
    glowClass: "hover:shadow-success/10",
  },
  {
    titulo: "Clientes Ativos",
    valor: metricas.clientesAtivos.valor.toString(),
    variacao: metricas.clientesAtivos.variacao,
    icon: Users,
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent",
    glowClass: "hover:shadow-accent/10",
  },
  {
    titulo: "Veículos Cadastrados",
    valor: metricas.veiculosCadastrados.valor.toString(),
    variacao: metricas.veiculosCadastrados.variacao,
    icon: Car,
    gradient: "from-chart-5/20 to-chart-5/5",
    iconBg: "bg-chart-5/15 text-chart-5",
    glowClass: "hover:shadow-chart-5/10",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <Card
          key={card.titulo}
          className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.glowClass}`}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <CardContent className="p-5 relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{card.titulo}</p>
                <p className="text-2xl font-display font-bold text-foreground">{card.valor}</p>
                <div className="flex items-center gap-1.5 text-xs">
                  <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-md ${card.variacao > 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                    {card.variacao > 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span className="font-semibold">
                      {card.variacao > 0 ? "+" : ""}{card.variacao}%
                    </span>
                  </div>
                  <span className="text-muted-foreground/70">vs mês anterior</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
