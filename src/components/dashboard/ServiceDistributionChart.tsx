import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { servicoDistribuicao } from "@/data/mockData";

const chartConfig = Object.fromEntries(
  servicoDistribuicao.map((s) => [s.tipo, { label: s.tipo, color: s.fill }])
);

export function ServiceDistributionChart() {
  const total = servicoDistribuicao.reduce((acc, s) => acc + s.quantidade, 0);

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display">Serviços por Tipo</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Distribuição do mês atual</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-display font-bold text-foreground">{total}</p>
            <p className="text-[11px] text-muted-foreground">serviços</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={servicoDistribuicao}
              dataKey="quantidade"
              nameKey="tipo"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={4}
              strokeWidth={0}
            >
              {servicoDistribuicao.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-3">
          {servicoDistribuicao.map((s) => (
            <div key={s.tipo} className="flex items-center gap-2 text-xs group cursor-default">
              <div className="h-2 w-2 rounded-full shrink-0" style={{ background: s.fill }} />
              <span className="text-muted-foreground truncate group-hover:text-foreground transition-colors">{s.tipo}</span>
              <span className="ml-auto font-semibold text-foreground tabular-nums">{s.quantidade}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
