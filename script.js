class Produto {//classe
    constructor() {
        this.id = 1;  //atributos
        this.arrayProdutos = [];
        
        
        
    }

    salvar() {
        let produto = this.lerdados();
        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }
        console.log(this.arrayProdutos);
      
    }
    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerdados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeproduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }

    validaCampos(produto) {

        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto \n';
        }

        if (produto.valor == '') {
            msg += 'Informe o valor do produto \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        
        return true;
    }
    cancelar() {
        
    }
}
var produto = new Produto();