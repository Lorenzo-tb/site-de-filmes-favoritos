let favUm = document.querySelector("#btnUm");
let favDois = document.querySelector("#btnDois");
let favTres = document.querySelector("#btnTres");
let favQuatro = document.querySelector("#btnQuatro");
let favCinco = document.querySelector("#btnCinco");
let favSeis = document.querySelector("#btnSeis");



let imagemUm = document.querySelector("#imgUm");
let imagemDois = document.querySelector("#imgDois");
let imagemTres = document.querySelector("#imgTres");
let imagemQuatro = document.querySelector("#imgQuatro");
let imagemCinco = document.querySelector("#imgCinco");
let imagemSeis = document.querySelector("#imgSeis");

let imgCheia = "./images/fav-cheio.png";
let imgVazia = "./images/fav.png"

//para adicionar aos favoritos

function mudarImagem(treco){
    if(treco.getAttribute("src") === imgVazia){

        treco.setAttribute("src",imgCheia);
    }else if(treco.getAttribute("src") === imgCheia){
        treco.setAttribute("src",imgVazia);
    }
}


favUm.addEventListener("click",(e) =>{
    mudarImagem(imagemUm);
});

favDois.addEventListener("click",(e) =>{
    mudarImagem(imagemDois);
});

favTres.addEventListener("click",(e) =>{
    mudarImagem(imagemTres);
});

favQuatro.addEventListener("click",(e) =>{
    mudarImagem(imagemQuatro);
});

favCinco.addEventListener("click",(e) =>{
    mudarImagem(imagemCinco);
});

favSeis.addEventListener("click",(e) =>{
    mudarImagem(imagemSeis);
});


//================================================================================================================================

let botaoBusca = document.querySelector("#botaoBusca");


let urlTeste = "http://www.omdbapi.com/?apikey=79dc6bc4&t=A%20Nightmare%20on%20Elm%20Street";
let urlBusca = "http://www.omdbapi.com/?apikey=79dc6bc4&s=";


//para buscar filmes na barra de pesquisa

function buscarFilme() {
    var inputBusca = document.querySelector("#inputBusca");
    var valorInput = inputBusca.value;

    if(valorInput != ""){
        console.log(valorInput);

        var urlBuscaCompleta = urlBusca + valorInput;

        fetch(urlBuscaCompleta)
        .then(resp=>resp.json())
        .then(buscaFilmeJson =>{
            if(buscaFilmeJson.Response == "True"){
                console.log(buscaFilmeJson);
            }else{
                console.log("Nenhum filme nao encontrado");
            }
            
        });
    }


}

botaoBusca.addEventListener("click",(e) =>{
    buscarFilme();
});


//========================================================================================================================
//para gerar um filme completo
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


gerarFilme();







