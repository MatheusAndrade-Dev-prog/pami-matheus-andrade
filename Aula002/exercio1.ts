interface Loja{
    produto: string,
    preco: number,
    disponivel: boolean
}

function Compra(loja:Loja): void{
    console.log(`Produto: ${loja.produto}- Preço:R$ ${loja.preco} - esta diponevel? R: ${loja.disponivel}`);
}
 
Compra({produto: 'Mause' , preco: 59.99 ,disponivel: true});