export class Produto {
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: Cor[];
  tamanhos: string[];
  fotos: Foto[];
}

export class Cor {
  nome: string;
  codigo: string;
}

export class Foto{
  url: string;
  capa: boolean;
}