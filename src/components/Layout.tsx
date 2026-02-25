import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between border-b border-border/50 px-6 bg-background/80 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
              <div className="hidden sm:flex items-center gap-2 bg-muted/40 rounded-lg px-3 py-2 text-sm text-muted-foreground border border-border/30 min-w-[240px]">
                <Search className="h-4 w-4 shrink-0" />
                <span className="text-muted-foreground/60">Buscar...</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-4.5 w-4.5 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground shadow-lg shadow-accent/30">
                  3
                </span>
              </Button>
              <div className="h-8 w-px bg-border/50" />
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  JP
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground leading-tight">João Pedro</p>
                  <p className="text-[11px] text-muted-foreground">Administrador</p>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
