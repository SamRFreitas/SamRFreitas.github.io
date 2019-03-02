  class Endereco
  {
      constructor(estado, cidade, rua, numero)
      {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
      }

      exibirEndereco()
      {
          return "Rua:" + this.rua + "," + this.numero + " " + this.cidade + "," + this.estado;
      }
  }
