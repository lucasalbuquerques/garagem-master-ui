import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Car,
  Package,
  DollarSign,
  Wrench,
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
    <Sidebar className="border-r border-border/30">
      <SidebarHeader className="p-5 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
            <Wrench className="h-[18px] w-[18px] text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-[17px] font-bold text-foreground leading-tight tracking-tight">
              AutoPro
            </h1>
            <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Gestão de Oficina</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-4 px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground transition-all duration-200 hover:bg-muted/40 hover:text-foreground"
                      activeClassName="bg-primary/10 text-primary font-medium shadow-sm"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      <span className="text-[13px] flex-1">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/30">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/20 border border-border/20">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-[11px] font-bold text-accent-foreground shadow-md shadow-accent/15">
            JP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">João Pedro</p>
            <p className="text-[10px] text-muted-foreground">Administrador</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
