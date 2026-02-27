import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ordensRecentes, StatusOS } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";

const statusConfig: Record<StatusOS, { className: string; dot: string }> = {
  "Aberta": { className: "bg-info/10 text-info border-info/20", dot: "bg-info" },
  "Em Andamento": { className: "bg-warning/10 text-warning border-warning/20", dot: "bg-warning" },
  "Aguardando Peça": { className: "bg-accent/10 text-accent border-accent/20", dot: "bg-accent" },
  "Concluída": { className: "bg-success/10 text-success border-success/20", dot: "bg-success" },
  "Cancelada": { className: "bg-destructive/10 text-destructive border-destructive/20", dot: "bg-destructive" },
};

export function RecentOrders() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display font-bold">Últimas Ordens de Serviço</CardTitle>
            <p className="text-xs text-muted-foreground mt-1.5">Ordens mais recentes do sistema</p>
          </div>
          <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-semibold transition-colors bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg">
            Ver todas <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-border/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-transparent bg-muted/20">
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">Nº OS</TableHead>
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">Cliente</TableHead>
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest hidden md:table-cell">Veículo</TableHead>
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest hidden lg:table-cell">Mecânico</TableHead>
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">Status</TableHead>
                <TableHead className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordensRecentes.map((ordem) => (
                <TableRow key={ordem.id} className="border-border/20 hover:bg-muted/15 cursor-pointer transition-colors group">
                  <TableCell className="font-mono text-sm font-bold text-primary">{ordem.numero}</TableCell>
                  <TableCell className="text-sm font-medium">{ordem.cliente}</TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                    {ordem.veiculo}
                    <span className="ml-1.5 text-[10px] font-mono text-muted-foreground/40">{ordem.placa}</span>
                  </TableCell>
                  <TableCell className="text-sm hidden lg:table-cell">{ordem.mecanico}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-[10px] font-semibold gap-1.5 rounded-md ${statusConfig[ordem.status].className}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${statusConfig[ordem.status].dot}`} />
                      {ordem.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-bold text-right tabular-nums">
                    {ordem.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
