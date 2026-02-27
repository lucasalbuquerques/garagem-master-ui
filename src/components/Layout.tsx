import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell, Search, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-[60px] flex items-center justify-between border-b border-border/40 px-6 bg-background/90 backdrop-blur-xl sticky top-0 z-30">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
              <div className="hidden sm:flex items-center gap-2.5 bg-muted/40 rounded-xl px-3.5 py-2 text-sm text-muted-foreground border border-border/30 min-w-[260px] hover:border-border/60 transition-colors focus-within:border-primary/40 focus-within:ring-1 focus-within:ring-primary/20">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground/50 w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl h-9 w-9"
              >
                {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              </Button>
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl h-9 w-9">
                <Bell className="h-[18px] w-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-[9px] font-bold flex items-center justify-center text-accent-foreground ring-2 ring-background">
                  3
                </span>
              </Button>
              <div className="h-6 w-px bg-border/40 mx-1" />
              <div className="flex items-center gap-2.5 pl-1">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-[11px] font-bold text-primary-foreground shadow-md shadow-primary/15">
                  JP
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground leading-tight">João Pedro</p>
                  <p className="text-[10px] text-muted-foreground">Administrador</p>
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
