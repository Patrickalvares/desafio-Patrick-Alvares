class Valores {
  static precosMap = new Map([
    ["cafe", 300],
    ["chantily", 150],
    ["suco", 620],
    ["sanduiche", 650],
    ["queijo", 200],
    ["salgado", 725],
    ["combo1", 950],
    ["combo2", 750],
  ]);

  static tiposPagamentoMap = new Map([
    ["dinheiro", 95],
    ["debito", 100],
    ["credito", 103],
  ]);

  static valorCompra(produtos, quantidade, metodoDePagamento) {
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
      let preco = Valores.precosMap.get(produtos[i]);
      total += preco * quantidade[i];
    }

    total = (total * Valores.tiposPagamentoMap.get(metodoDePagamento)) / 100;
    total = total / 100;
    return "R$ " + total.toFixed(2).replace(".", ",");
  }
}

export { Valores };
