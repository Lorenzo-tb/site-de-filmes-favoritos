let botaoBusca = document.querySelector("#botaoBusca");
let inputBusca = document.querySelector("#inputBusca");





//para buscar filmes na barra de pesquisa

let urlId = "http://www.omdbapi.com/?apikey=79dc6bc4&i=";

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

let detalhesFilme= (id) =>{
    fetch(urlId+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        console.log(resp);

        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(", "),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(", "),
            resp.Rated,
            resp.imdbRating
        );

        let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
        let listaFilmes = document.querySelector("#lista-filmes");
        detalhesDoFilme.innerHTML = "";
        console.log(detalhesDoFilme);
        console.log(filme.getCardDetalhes());
        listaFilmes.innerHTML = "";
        detalhesDoFilme.appendChild(filme.getCardDetalhes());
        console.log(detalhesDoFilme);
    });
}

let listarFilmes = async (filmes) =>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
    listaFilmes.innerHTML = "";
    detalhesDoFilme.innerHTML ="";
    console.log(listaFilmes);
    if(filmes.length > 0){
        console.log("ola mundo");

        filmes.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());
            //console.log(filme.id);
            filme.btnInformacoes.onclick=()=>{
                detalhesFilme(filme.id);
                
            }
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








