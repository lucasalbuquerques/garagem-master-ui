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
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display font-bold">Serviços por Tipo</CardTitle>
            <p className="text-xs text-muted-foreground mt-1.5">Distribuição do mês atual</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xl font-display font-bold text-foreground tracking-tight">{total}</p>
            <p className="text-[11px] text-muted-foreground">serviços</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[220px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={servicoDistribuicao}
              dataKey="quantidade"
              nameKey="tipo"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              strokeWidth={0}
              cornerRadius={4}
            >
              {servicoDistribuicao.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
          {servicoDistribuicao.map((s) => (
            <div key={s.tipo} className="flex items-center gap-2 text-xs group cursor-default">
              <div className="h-2.5 w-2.5 rounded-[3px] shrink-0 ring-1 ring-black/5" style={{ background: s.fill }} />
              <span className="text-muted-foreground truncate group-hover:text-foreground transition-colors">{s.tipo}</span>
              <span className="ml-auto font-bold text-foreground tabular-nums">{s.quantidade}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
