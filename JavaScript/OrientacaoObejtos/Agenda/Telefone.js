class Telefone
{
    constructor( ddd, numero)
    {
        this.ddd = ddd;
        this.numero= numero;
    }

    exibirTelefone()
    {
        return "DDD:0" + this.ddd + "-" + this.numero; 
    }
}
