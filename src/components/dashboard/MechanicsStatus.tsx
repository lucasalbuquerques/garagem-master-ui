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
          <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30">
            {disponiveis} disponíveis
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {mecanicos.map((mec) => (
          <div key={mec.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
            <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
              {mec.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{mec.nome}</p>
              <p className="text-xs text-muted-foreground">{mec.especialidade}</p>
            </div>
            <div className="text-right shrink-0">
              <Badge
                variant="outline"
                className={`text-[10px] ${
                  mec.status === "Disponível"
                    ? "bg-success/10 text-success border-success/30"
                    : "bg-warning/10 text-warning border-warning/30"
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
