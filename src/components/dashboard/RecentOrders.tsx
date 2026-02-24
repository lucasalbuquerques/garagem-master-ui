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

const statusConfig: Record<StatusOS, { className: string }> = {
  "Aberta": { className: "bg-info/15 text-info border-info/30" },
  "Em Andamento": { className: "bg-warning/15 text-warning border-warning/30" },
  "Aguardando Peça": { className: "bg-accent/15 text-accent border-accent/30" },
  "Concluída": { className: "bg-success/15 text-success border-success/30" },
  "Cancelada": { className: "bg-destructive/15 text-destructive border-destructive/30" },
};

export function RecentOrders() {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-display">Últimas Ordens de Serviço</CardTitle>
            <p className="text-sm text-muted-foreground mt-0.5">Ordens mais recentes do sistema</p>
          </div>
          <Badge variant="outline" className="text-xs text-muted-foreground">
            {ordensRecentes.length} ordens
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-xs text-muted-foreground font-medium">Nº OS</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium">Cliente</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium hidden md:table-cell">Veículo</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium hidden lg:table-cell">Mecânico</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium">Status</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordensRecentes.map((ordem) => (
              <TableRow key={ordem.id} className="border-border/30 hover:bg-muted/30 cursor-pointer transition-colors">
                <TableCell className="font-mono text-sm font-medium text-primary">{ordem.numero}</TableCell>
                <TableCell className="text-sm">{ordem.cliente}</TableCell>
                <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                  {ordem.veiculo}
                  <span className="ml-2 text-xs font-mono opacity-60">{ordem.placa}</span>
                </TableCell>
                <TableCell className="text-sm hidden lg:table-cell">{ordem.mecanico}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[11px] font-medium ${statusConfig[ordem.status].className}`}>
                    {ordem.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-medium text-right">
                  {ordem.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
