import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { faturamentoMensal } from "@/data/mockData";

const chartConfig = {
  valor: {
    label: "Faturamento",
    color: "hsl(var(--primary))",
  },
};

export function RevenueChart() {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display">Faturamento Mensal</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Últimos 6 meses em R$</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-display font-bold text-foreground">R$ 263.850</p>
            <p className="text-[11px] text-success font-medium">+12.5% no período</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={faturamentoMensal} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={1} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="mes"
              stroke="hsl(var(--muted-foreground))"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                  }
                />
              }
            />
            <Bar dataKey="valor" fill="url(#barGradient)" radius={[8, 8, 0, 0]} barSize={36} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
