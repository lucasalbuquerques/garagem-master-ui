import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mecanicos } from "@/data/mockData";
import { Wrench } from "lucide-react";

export function MechanicsStatus() {
  const disponiveis = mecanicos.filter((m) => m.status === "Disponível").length;

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-display font-bold">Mecânicos</CardTitle>
          <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/20 gap-1.5 rounded-md font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            {disponiveis} disponíveis
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {mecanicos.map((mec) => (
          <div key={mec.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/15 border border-border/20 hover:bg-muted/30 transition-all duration-200 cursor-default group">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:scale-105 ${
              mec.status === "Disponível"
                ? "bg-success/10 text-success ring-1 ring-success/20"
                : "bg-warning/10 text-warning ring-1 ring-warning/20"
            }`}>
              {mec.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{mec.nome}</p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Wrench className="h-2.5 w-2.5" />
                {mec.especialidade}
              </p>
            </div>
            <div className="text-right shrink-0">
              <Badge
                variant="outline"
                className={`text-[9px] font-semibold rounded-md ${
                  mec.status === "Disponível"
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-warning/10 text-warning border-warning/20"
                }`}
              >
                {mec.status}
              </Badge>
              {mec.ordemAtual && (
                <p className="text-[10px] text-muted-foreground/60 mt-1 font-mono">{mec.ordemAtual}</p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
