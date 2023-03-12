let botaoBusca = document.querySelector("#botaoBusca");
let inputBusca = document.querySelector("#inputBusca");





//para buscar filmes na barra de pesquisa

function buscarFilme() {
    let valorInput = inputBusca.value;

    if(valorInput.length > 0 && valorInput != ""){
        console.log(valorInput);

        var urlBuscaCompleta = urlBusca + valorInput;

        let filmes = new Array();

        fetch(urlBuscaCompleta)
        .then((resp) => resp.json())
        .then((resp) =>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) =>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        console.log("ola mundo");
        filmes.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());
        });
    }
}

botaoBusca.onclick = async() =>{
    buscarFilme();
}































































//========================================================================================================================
//para gerar um filme completo

let urlTeste = "http://www.omdbapi.com/?apikey=79dc6bc4&i=tt0234215";
let urlBusca = "http://www.omdbapi.com/?apikey=79dc6bc4&s=";

function gerarFilme(){
    fetch(urlTeste)
    .then(resp=>resp.json())
    .then(filmeJson =>{
        console.log(filmeJson);
        console.log("ID: " + filmeJson.imdbID);
        console.log("Titulo: " + filmeJson.Title);
        console.log("Ano: " + filmeJson.Year);
        console.log("Genero: " + filmeJson.Genre);
        console.log("Cartas: " + filmeJson.Poster);
        console.log("Diretor: " + filmeJson.Director);
        console.log("Atores: " + filmeJson.Actors);
        console.log("Classificacao: " + filmeJson.Rated);
        console.log("Avaliacao: " + filmeJson.Ratings[1].Value);
        console.log("Sinopse: " + filmeJson.Plot);
        console.log("Duracao: " + filmeJson.Runtime);
        
        
    })
}


//gerarFilme();








