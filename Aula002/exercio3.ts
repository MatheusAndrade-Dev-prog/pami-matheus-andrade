interface Livro{
    titulo: string,
    autor:string,
    ano: number
}

function pesquisarLivros(livro:Livro):void{
    console.log(`nome do livro:${livro.titulo} autor:${livro.autor} ano de publicação:${livro.ano} `)
}

pesquisarLivros({titulo: 'Harry potter', autor:'Emma Waston', ano: 2005});