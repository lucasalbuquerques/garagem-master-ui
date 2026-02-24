import { ClipboardList, DollarSign, Users, Car, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { metricas } from "@/data/mockData";

const cards = [
  {
    titulo: "Ordens Abertas",
    valor: metricas.ordensAbertas.valor.toString(),
    variacao: metricas.ordensAbertas.variacao,
    icon: ClipboardList,
    cor: "text-info bg-info/10",
  },
  {
    titulo: "Faturamento do Mês",
    valor: metricas.faturamentoMes.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    variacao: metricas.faturamentoMes.variacao,
    icon: DollarSign,
    cor: "text-success bg-success/10",
  },
  {
    titulo: "Clientes Ativos",
    valor: metricas.clientesAtivos.valor.toString(),
    variacao: metricas.clientesAtivos.variacao,
    icon: Users,
    cor: "text-accent bg-accent/10",
  },
  {
    titulo: "Veículos Cadastrados",
    valor: metricas.veiculosCadastrados.valor.toString(),
    variacao: metricas.veiculosCadastrados.variacao,
    icon: Car,
    cor: "text-chart-5 bg-chart-5/10",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.titulo} className="glass-card overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{card.titulo}</p>
                <p className="text-2xl font-display font-bold text-foreground">{card.valor}</p>
                <div className="flex items-center gap-1 text-xs">
                  {card.variacao > 0 ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={card.variacao > 0 ? "text-success" : "text-destructive"}>
                    {card.variacao > 0 ? "+" : ""}{card.variacao}%
                  </span>
                  <span className="text-muted-foreground">vs mês anterior</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${card.cor}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
