class Agenda
{
   constructor()
   {
      this.contatos = [];
   }

   inserirContato(nome, ddd, telefone, estado, cidade, rua, numero, email)
   {
     var pessoa = new Pessoa(nome);
     var contato = new Contatos(pessoa);
     contato.inserirTel(ddd, telefone);
     contato.inserirEndereco( estado, cidade, rua, numero);
     contato.inserirEmail(email);

     this.contatos.push(contato);
   }

}
