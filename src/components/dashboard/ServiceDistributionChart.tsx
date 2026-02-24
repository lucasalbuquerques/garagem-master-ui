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
        <CardTitle className="text-base font-display">Serviços por Tipo</CardTitle>
        <p className="text-sm text-muted-foreground">Distribuição do mês atual</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={servicoDistribuicao}
              dataKey="quantidade"
              nameKey="tipo"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              strokeWidth={0}
            >
              {servicoDistribuicao.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {servicoDistribuicao.map((s) => (
            <div key={s.tipo} className="flex items-center gap-2 text-xs">
              <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: s.fill }} />
              <span className="text-muted-foreground truncate">{s.tipo}</span>
              <span className="ml-auto font-medium text-foreground">{s.quantidade}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
