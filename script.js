class Produto {//classe
    constructor() {
        this.id = 1;  //atributos
        this.arrayProdutos = [];        
    }

    salvar() {
        let produto = this.lerdados();
        if (this.validaCampos(produto)) {
            this.adicionar(produto);
            this.listaTabela();
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
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }

    validaCampos(produto) {

        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Entrez le nom du produit \n';
        }

        if (produto.valor == '') {
            msg += 'Entrez le valeur du produit \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        
        return true;
    }
    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;

            td_id.classList.add('center');
            td_acoes.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'edit.png';
            imgEdit.setAttribute("onclick", "produto.editar("+JSON.stringify(this.arrayProdutos[i])+")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'delete.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }
}

var produto = new Produto();