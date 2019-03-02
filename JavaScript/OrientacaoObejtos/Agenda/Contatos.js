class Contatos
{
  constructor(pessoa)
  {
      this.pessoa = pessoa;
      this.telefone = [];
      this.endereco = [];
      this.email = [];
  }

  inserirTel(ddd, numero)
  {
    var tel = new Telefone(ddd, numero);
    this.telefone.push(tel);
  }

  inserirEndereco(estado, cidade, rua, numero)
  {
    var end = new Endereco(estado, cidade, rua, numero);
    this.endereco.push(end);
  }

  inserirEmail(email)
  {
    var email = new Email(email);
    this.email.push(email);
  }



  mostarGeral()
  {
      document.write("Nome:" + this.pessoa.nome + "<br>" +
                     "Telefone: " + this.telefone[0].exibirTelefone()+ "<br>" +
                     "Email: " + this.email[0].exibirEmail()+ "<br>" +
                     "Endereco: " + this.endereco[0].exibirEndereco() + "<br>"

                    );
  }

}
