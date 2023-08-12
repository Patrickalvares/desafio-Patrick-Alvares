import { Valores } from "./valores.js";

class Verificacoes {
  static isQueijoSemSanduiche(produtos) {
    if (produtos.includes("queijo")) {
      if (!produtos.includes("sanduiche")) {
        return true;
      }
    } else {
      return false;
    }
  }

  static isChantilySemCafe(produtos) {
    if (produtos.includes("chantily")) {
      if (!produtos.includes("cafe")) {
        return true;
      }
    } else {
      return false;
    }
  }

  static isCarrinhoVazio(produtos) {
    return produtos.length <= 0 ? true : false;
  }

  static isQuantidadeInvalida(quantidade) {
    return quantidade.length <= 0 || quantidade.some((q) => q <= 0)
      ? true
      : false;
  }

  static isAlgumProdutoInvalidos(produtos) {
    return produtos.every((item) => Valores.precosMap.has(item)) ? false : true;
  }

  static isFormaPagamentoInvalida(metodoDePagamento) {
    return Valores.tiposPagamentoMap.has(metodoDePagamento) ? false : true;
  }
}
export { Verificacoes };
