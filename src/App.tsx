import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ordens" element={<PlaceholderPage titulo="Ordens de Serviço" descricao="Gerencie todas as ordens de serviço da oficina." />} />
            <Route path="/clientes" element={<PlaceholderPage titulo="Clientes" descricao="Cadastro e gerenciamento de clientes." />} />
            <Route path="/veiculos" element={<PlaceholderPage titulo="Veículos" descricao="Controle de veículos cadastrados." />} />
            <Route path="/estoque" element={<PlaceholderPage titulo="Estoque" descricao="Controle de peças e inventário." />} />
            <Route path="/financeiro" element={<PlaceholderPage titulo="Financeiro" descricao="Visão geral financeira da oficina." />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
