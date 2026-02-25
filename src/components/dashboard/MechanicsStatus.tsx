import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mecanicos } from "@/data/mockData";

export function MechanicsStatus() {
  const disponiveis = mecanicos.filter((m) => m.status === "Disponível").length;

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-display">Mecânicos</CardTitle>
          <Badge variant="outline" className="text-[11px] bg-success/10 text-success border-success/20 gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            {disponiveis} disponíveis
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {mecanicos.map((mec) => (
          <div key={mec.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border border-border/20 hover:bg-muted/40 transition-colors cursor-default group">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold shadow-md transition-transform duration-200 group-hover:scale-105 ${
              mec.status === "Disponível"
                ? "bg-gradient-to-br from-success/30 to-success/10 text-success"
                : "bg-gradient-to-br from-warning/30 to-warning/10 text-warning"
            }`}>
              {mec.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{mec.nome}</p>
              <p className="text-[11px] text-muted-foreground">{mec.especialidade}</p>
            </div>
            <div className="text-right shrink-0">
              <Badge
                variant="outline"
                className={`text-[10px] font-medium ${
                  mec.status === "Disponível"
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-warning/10 text-warning border-warning/20"
                }`}
              >
                {mec.status}
              </Badge>
              {mec.ordemAtual && (
                <p className="text-[10px] text-muted-foreground mt-1 font-mono">{mec.ordemAtual}</p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
