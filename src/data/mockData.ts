export type StatusOS = "Aberta" | "Em Andamento" | "Aguardando Peça" | "Concluída" | "Cancelada";

export interface OrdemServico {
  id: string;
  numero: string;
  cliente: string;
  veiculo: string;
  placa: string;
  mecanico: string;
  status: StatusOS;
  valor: number;
  data: string;
  servicos: string[];
}

export interface Mecanico {
  id: string;
  nome: string;
  especialidade: string;
  status: "Disponível" | "Ocupado";
  ordemAtual?: string;
  avatar: string;
}

export interface FaturamentoMensal {
  mes: string;
  valor: number;
}

export interface ServicoDistribuicao {
  tipo: string;
  quantidade: number;
  fill: string;
}

export const metricas = {
  ordensAbertas: { valor: 12, variacao: +8 },
  faturamentoMes: { valor: 47850, variacao: +12.5 },
  clientesAtivos: { valor: 234, variacao: +3 },
  veiculosCadastrados: { valor: 312, variacao: +5 },
};

export const faturamentoMensal: FaturamentoMensal[] = [
  { mes: "Set", valor: 38200 },
  { mes: "Out", valor: 42100 },
  { mes: "Nov", valor: 39800 },
  { mes: "Dez", valor: 51300 },
  { mes: "Jan", valor: 44600 },
  { mes: "Fev", valor: 47850 },
];

export const servicoDistribuicao: ServicoDistribuicao[] = [
  { tipo: "Troca de Óleo", quantidade: 45, fill: "hsl(var(--chart-1))" },
  { tipo: "Freios", quantidade: 32, fill: "hsl(var(--chart-2))" },
  { tipo: "Suspensão", quantidade: 28, fill: "hsl(var(--chart-3))" },
  { tipo: "Elétrica", quantidade: 22, fill: "hsl(var(--chart-4))" },
  { tipo: "Motor", quantidade: 18, fill: "hsl(var(--chart-5))" },
  { tipo: "Ar Condicionado", quantidade: 15, fill: "hsl(var(--chart-6))" },
];

export const ordensRecentes: OrdemServico[] = [
  {
    id: "1",
    numero: "OS-2024-0147",
    cliente: "Carlos Eduardo Silva",
    veiculo: "VW Gol 1.6 2021",
    placa: "BRA2E19",
    mecanico: "Roberto Almeida",
    status: "Em Andamento",
    valor: 1250.0,
    data: "2024-02-22",
    servicos: ["Troca de pastilhas de freio", "Alinhamento"],
  },
  {
    id: "2",
    numero: "OS-2024-0146",
    cliente: "Ana Paula Ferreira",
    veiculo: "Chevrolet Onix 1.0T 2023",
    placa: "RIO3A45",
    mecanico: "Marcos Vinícius",
    status: "Aberta",
    valor: 890.0,
    data: "2024-02-22",
    servicos: ["Revisão completa 10.000km"],
  },
  {
    id: "3",
    numero: "OS-2024-0145",
    cliente: "José Ricardo Mendes",
    veiculo: "Hyundai HB20 1.0 2022",
    placa: "SPO4B78",
    mecanico: "Felipe Santos",
    status: "Aguardando Peça",
    valor: 2340.0,
    data: "2024-02-21",
    servicos: ["Troca de embreagem", "Retífica do volante"],
  },
  {
    id: "4",
    numero: "OS-2024-0144",
    cliente: "Maria Luíza Costa",
    veiculo: "Toyota Corolla 2.0 2020",
    placa: "MGA5C12",
    mecanico: "Roberto Almeida",
    status: "Concluída",
    valor: 3150.0,
    data: "2024-02-20",
    servicos: ["Troca da correia dentada", "Bomba d'água", "Tensor"],
  },
  {
    id: "5",
    numero: "OS-2024-0143",
    cliente: "Fernando Augusto Reis",
    veiculo: "Fiat Argo 1.3 2023",
    placa: "BHZ6D34",
    mecanico: "Marcos Vinícius",
    status: "Concluída",
    valor: 480.0,
    data: "2024-02-19",
    servicos: ["Troca de óleo e filtros"],
  },
];

export const mecanicos: Mecanico[] = [
  {
    id: "1",
    nome: "Roberto Almeida",
    especialidade: "Motor e Transmissão",
    status: "Ocupado",
    ordemAtual: "OS-2024-0147",
    avatar: "RA",
  },
  {
    id: "2",
    nome: "Marcos Vinícius",
    especialidade: "Elétrica e Injeção",
    status: "Disponível",
    avatar: "MV",
  },
  {
    id: "3",
    nome: "Felipe Santos",
    especialidade: "Suspensão e Freios",
    status: "Ocupado",
    ordemAtual: "OS-2024-0145",
    avatar: "FS",
  },
  {
    id: "4",
    nome: "Diego Oliveira",
    especialidade: "Ar Condicionado",
    status: "Disponível",
    avatar: "DO",
  },
];
