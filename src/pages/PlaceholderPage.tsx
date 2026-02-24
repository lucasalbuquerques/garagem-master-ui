import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  titulo: string;
  descricao: string;
}

export function PlaceholderPage({ titulo, descricao }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="p-4 rounded-2xl bg-muted/50 mb-4">
        <Construction className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-2xl font-display font-bold text-foreground">{titulo}</h1>
      <p className="text-muted-foreground mt-2">{descricao}</p>
    </div>
  );
}
