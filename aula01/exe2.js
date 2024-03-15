const inventario = [
    { id: 1, nome: 'Camiseta', categoria: 'Roupas', quantidade: 50 },
    { id: 2, nome: 'Tênis', categoria: 'Calçados', quantidade: 30 },
    { id: 3, nome: 'Mochila', categoria: 'Acessórios', quantidade: 20 }
  ];
  
  function adicionarProduto(nome, categoria, quantidade) {
      const novoProduto = {
          id: inventario.length + 1,
          nome: nome,
          categoria: categoria,
          quantidade: quantidade
      };
      inventario.push(novoProduto);
  }
  
  function removerProduto(id) {
      inventario = inventario.filter(produto => produto.id !== id);
  }
  
  function atualizarQuantidade(id, novaQuantidade) {
      const produto = inventario.find(produto => produto.id === id);
      if (produto) {
          produto.quantidade = novaQuantidade;
      }
  }
  
  function filtrarPorCategoria(categoria) {
      return inventario.filter(produto => produto.categoria === categoria);
  }
  
  function exibirInventario() {
      inventario.forEach(produto => {
          console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}, Quantidade: ${produto.quantidade}`);
      });
  }
  
  // Testando as funções
  console.log("Inventário Inicial:");
  exibirInventario();
  
  console.log("\nAdicionando novo produto:");
  adicionarProduto('Bolsa', 'Acessórios', 40);
  exibirInventario();
  
  console.log("\nAtualizando a quantidade do produto 'Tênis' para 50:");
  atualizarQuantidade(2, 50);
  exibirInventario();
  
  console.log("\nFiltrando produtos da categoria 'Acessórios':");
  console.log(filtrarPorCategoria('Acessórios'));
  
  console.log("\nRemovendo o produto 'Camiseta':");
  removerProduto(1);
  exibirInventario();
  