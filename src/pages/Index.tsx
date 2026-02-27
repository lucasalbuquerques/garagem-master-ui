import { MetricCards } from "@/components/dashboard/MetricCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ServiceDistributionChart } from "@/components/dashboard/ServiceDistributionChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { MechanicsStatus } from "@/components/dashboard/MechanicsStatus";
import { Calendar, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="h-3.5 w-3.5 text-primary" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">Visão geral</p>
          </div>
          <h1 className="text-[28px] font-display font-bold text-foreground tracking-tight">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/25 px-3.5 py-2 rounded-xl border border-border/30">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-medium">Fevereiro 2024</span>
        </div>
      </div>

      <MetricCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <ServiceDistributionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <MechanicsStatus />
      </div>
    </div>
  );
};

export default Index;
