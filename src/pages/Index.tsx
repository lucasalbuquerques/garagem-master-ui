import { MetricCards } from "@/components/dashboard/MetricCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ServiceDistributionChart } from "@/components/dashboard/ServiceDistributionChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { MechanicsStatus } from "@/components/dashboard/MechanicsStatus";

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Visão geral da oficina</p>
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
