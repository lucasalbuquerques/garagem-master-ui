import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { faturamentoMensal } from "@/data/mockData";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  valor: {
    label: "Faturamento",
    color: "hsl(var(--primary))",
  },
};

export function RevenueChart() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display font-bold">Faturamento Mensal</CardTitle>
            <p className="text-xs text-muted-foreground mt-1.5">Últimos 6 meses em R$</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-display font-bold text-foreground tracking-tight">R$ 263.850</p>
            <div className="flex items-center gap-1 justify-end mt-0.5">
              <TrendingUp className="h-3 w-3 text-success" />
              <p className="text-[11px] text-success font-semibold">+12.5% no período</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={faturamentoMensal} margin={{ top: 16, right: 8, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.9} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.5} />
            <XAxis
              dataKey="mes"
              stroke="hsl(var(--muted-foreground))"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dy={8}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              dx={-4}
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
            <Bar dataKey="valor" fill="url(#barGradient)" radius={[10, 10, 0, 0]} barSize={32} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
