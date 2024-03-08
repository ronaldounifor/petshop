let produtos = [];

const areaResultados = document.getElementById('results');

mostrarProdutos();

async function mostrarProdutos() {
    areaResultados.innerHTML = "";
    produtos = [];

    const query = new Parse.Query('Produto');
    try {
        
        const resultado = await query.find();

        resultado.forEach((data) => {
			dadosFinanceiros.push({
                nome: data.get(`nome`),
                descricao: data.get(`descricao`),
                preco: data.get(`preco`),
            });
            imprimir(data);
        })
    } catch (error) {
        console.error('Erro ao buscar dados', error);
    }
}

function imprimir(data) {
    const elemento = document.createElement("div");
    elemento.innerHTML = `
        <p>Nome: ${data.nome}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Preço: ${data.preco}</p>
    `;
    areaResultados.appendChild(elemento);
    console.log(data.id);
}