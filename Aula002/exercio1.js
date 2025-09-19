function Compra(loja) {
    console.log("Produto: ".concat(loja.produto, "- Pre\u00E7o:R$ ").concat(loja.preco, " - esta diponevel? R: ").concat(loja.disponivel));
}
Compra({ produto: 'Mause', preco: 59.99, disponivel: true });
