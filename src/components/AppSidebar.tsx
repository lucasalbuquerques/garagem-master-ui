import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Car,
  Package,
  DollarSign,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Ordens de Serviço", url: "/ordens", icon: ClipboardList },
  { title: "Clientes", url: "/clientes", icon: Users },
  { title: "Veículos", url: "/veiculos", icon: Car },
  { title: "Estoque", url: "/estoque", icon: Package },
  { title: "Financeiro", url: "/financeiro", icon: DollarSign },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="p-5 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/20">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-foreground leading-tight tracking-tight">
              AutoPro
            </h1>
            <p className="text-[11px] text-muted-foreground font-medium tracking-wide uppercase">Gestão de Oficina</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-4 px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground transition-all duration-200 hover:bg-muted/50 hover:text-foreground group"
                      activeClassName="bg-primary/10 text-primary font-medium border border-primary/20 glow-primary"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      <span className="text-sm flex-1">{item.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-200" />
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/40">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-muted/30 border border-border/30">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-xs font-bold text-accent-foreground shadow-md shadow-accent/20">
            JP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">João Pedro</p>
            <p className="text-[11px] text-muted-foreground">Administrador</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
