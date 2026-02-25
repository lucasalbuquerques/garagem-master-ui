import { MetricCards } from "@/components/dashboard/MetricCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ServiceDistributionChart } from "@/components/dashboard/ServiceDistributionChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { MechanicsStatus } from "@/components/dashboard/MechanicsStatus";
import { Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Visão geral</p>
          <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg border border-border/30">
          <Calendar className="h-3.5 w-3.5" />
          <span>Fevereiro 2024</span>
        </div>
      </div>

      <MetricCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <ServiceDistributionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <MechanicsStatus />
      </div>
    </div>
  );
};

export default Index;
