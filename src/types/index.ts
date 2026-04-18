export type PorteVeiculo = 'pequeno' | 'medio' | 'grande' | 'suv' | 'pickup';
export type StatusOS = 'entrada' | 'execucao' | 'finalizacao' | 'pronto' | 'entregue' | 'cancelado';
export type CategoriaServico = 'lavagem' | 'polimento' | 'vitrificacao' | 'higienizacao' | 'ppf' | 'estetica';
export type StatusAgendamento = 'pendente' | 'confirmado' | 'cancelado';

export interface Cliente {
  id: string;
  nome: string;
  telefone: string;
  email?: string;
  criado_em: string;
}

export interface Veiculo {
  id: string;
  cliente_id: string;
  marca: string;
  modelo: string;
  ano?: number;
  cor?: string;
  placa?: string;
  porte: PorteVeiculo;
  criado_em: string;
}

export interface Servico {
  id: string;
  nome: string;
  descricao?: string;
  categoria: CategoriaServico;
  preco_base_pequeno?: number;
  preco_base_medio?: number;
  preco_base_grande?: number;
  duracao_minutos?: number;
  ativo: boolean;
}

export interface OrdemServico {
  id: string;
  veiculo_id: string;
  cliente_id: string;
  status: StatusOS;
  data_entrada: string;
  data_prevista?: string;
  data_saida?: string;
  valor_total?: number;
  observacoes?: string;
  fotos_entrada?: string[];
  fotos_saida?: string[];
  checklist_avarias?: any;
  criado_em: string;
}

export interface OSServico {
  id: string;
  os_id: string;
  servico_id: string;
  preco_aplicado: number;
  observacao?: string;
}

export interface Agendamento {
  id: string;
  cliente_id: string;
  veiculo_id: string;
  data_hora: string;
  servicos_ids: string[];
  status: StatusAgendamento;
  valor_estimado?: number;
  criado_em: string;
}

export interface Insumo {
  id: string;
  nome: string;
  unidade: string;
  quantidade_atual: number;
  quantidade_minima: number;
  criado_em: string;
}

export interface PerfilAdmin {
  id: string;
  nome: string;
  role: 'admin';
}
