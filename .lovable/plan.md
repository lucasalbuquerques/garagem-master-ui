

# Fase 1: Dashboard + Sidebar com Tema Escuro

## 1. Tema Escuro Automotivo
- Atualizar as variáveis CSS para tema escuro como padrão
- Fundo escuro (slate/zinc), cards em cinza escuro, acentos em azul (#3B82F6) e laranja (#F97316)
- Tipografia limpa com boa hierarquia visual

## 2. Sidebar de Navegação
- Sidebar fixa à esquerda usando componente Shadcn Sidebar
- Ícones + labels para cada seção: Dashboard, Ordens de Serviço, Clientes, Veículos, Estoque, Financeiro
- Logo da oficina no topo ("AutoPro Oficina" ou similar)
- Destaque visual na rota ativa
- Colapsável em mobile com ícone de menu

## 3. Dashboard - Cards de Métricas
- 4 cards principais no topo:
  - **Ordens Abertas**: ex. 12, com indicador de variação
  - **Faturamento do Mês**: ex. R$ 47.850,00
  - **Clientes Ativos**: ex. 234
  - **Veículos Cadastrados**: ex. 312
- Ícones e cores diferenciadas por card

## 4. Dashboard - Gráficos
- **Gráfico de barras**: Faturamento mensal dos últimos 6 meses (Recharts)
- **Gráfico de pizza/donut**: Distribuição por tipo de serviço (Troca de óleo, Freios, Suspensão, Elétrica, etc.)

## 5. Dashboard - Últimas Ordens de Serviço
- Tabela com as 5 ordens mais recentes
- Colunas: Nº OS, Cliente, Veículo, Mecânico, Status, Valor
- Badges coloridos para status (Aberta = azul, Em Andamento = amarelo, Concluída = verde, Aguardando Peça = laranja)

## 6. Dashboard - Mecânicos
- Card lateral mostrando mecânicos disponíveis vs ocupados
- Lista com nome, status (disponível/ocupado) e ordem atual

## 7. Dados Mockados Realistas
- Arquivo separado com dados brasileiros: nomes reais, placas Mercosul (ABC1D23), marcas/modelos populares (Gol, Onix, HB20, Corolla), valores em R$, CPFs formatados

## 8. Estrutura de Rotas
- Criar rotas placeholder para todas as seções (Clientes, Veículos, OS, Estoque, Financeiro) com página "Em breve"
- Dashboard como rota principal (/)

