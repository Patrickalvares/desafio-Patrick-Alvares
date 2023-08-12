import { Valores } from "./valores.js";
import { Verificacoes } from "./verificacoes.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let produtos = [];
    let quantidade = [];

    for (let i = 0; i < itens.length; i++) {
      let parte = itens[i].split(",");
      produtos[i] = parte[0];
      quantidade[i] = parseInt(parte[1]);
    }

    if (
      Verificacoes.isQueijoSemSanduiche(produtos) ||
      Verificacoes.isChantilySemCafe(produtos)
    ) {
      return "Item extra não pode ser pedido sem o principal";
    }

    if (Verificacoes.isCarrinhoVazio(produtos)) {
      return "Não há itens no carrinho de compra!";
    }

    if (Verificacoes.isQuantidadeInvalida(quantidade)) {
      return "Quantidade inválida!";
    }

    if (Verificacoes.isAlgumProdutoInvalidos(produtos)) {
      return "Item inválido!";
    }

    if (Verificacoes.isFormaPagamentoInvalida(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    return Valores.valorCompra(produtos, quantidade, metodoDePagamento);
  }
}

export { CaixaDaLanchonete };
