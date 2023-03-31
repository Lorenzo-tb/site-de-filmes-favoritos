let botaoBusca = document.querySelector("#botaoBusca");
let inputBusca = document.querySelector("#inputBusca");
let btnLimpar = document.querySelector("#limpar");
let btnFavoritos = document.querySelector("#favoritos");
let urlBusca = "http://www.omdbapi.com/?apikey=79dc6bc4&s=";

let num = localStorage.length;
console.log(num);



btnLimpar.onclick=(e) =>{
    localStorage.clear();
    num = localStorage.length;
    console.log(num);
     
}

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
                console.log(filmes)
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

        document.querySelector("#botaoFechar").onclick = ()=>{
            detalhesDoFilme.innerHTML = "";
            listaFilmes.style.display="flex";
            detalhesDoFilme.style.display="none";
        }

        document.querySelector("#botaoFavoritar").onclick =()=>{
            let fazer = false;

            for(let aux=0;aux<num ; aux++){
                let filmeAtual = JSON.parse(localStorage[aux]);
                if(filme.id == filmeAtual.id){
                    fazer = true;
                    break;
                }
            }

            if(fazer == false){
                var filmesString = localStorage;
                let filmeString = JSON.stringify(filme);
                filmesString.setItem(num, filmeString);
                console.log(filmesString)
                console.log(JSON.parse(localStorage[num]))
                num = localStorage.length;
            }
        }
        listaFilmes.style.display="none";
    });
}


btnFavoritos.onclick = (e) =>{
    
    let filmesFavoritos = new Array();

        for(let aux=0; aux<num; aux++){
            let item = JSON.parse(localStorage[aux]);
            let filme = new Filme(
                item.id,
                item.titulo,
                item.ano,
                null,
                null,
                item.cartaz,
                null,
                null,
                null,
                null,
                null
            );
            filmesFavoritos.push(filme);
            console.log(filmesFavoritos);
        }

    listarFilmesDois(filmesFavoritos);

};

let listarFilmesDois = async (filmesFavoritos) =>{
    let listaFilmes = document.querySelector("#lista-filmes");
    let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
    listaFilmes.innerHTML = "";
    detalhesDoFilme.innerHTML ="";
    console.log(listaFilmes);
    if(filmesFavoritos.length > 0){
        console.log("teste");
        filmesFavoritos.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());

            console.log(filme.id);

            filme.btnInformacoes.onclick=()=>{
                detalhesFilme(filme.id);
                
            }
        });
    }
}


let listarFilmes = async (filmes) =>{
    let listaFilmes = document.querySelector("#lista-filmes");
    let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
    listaFilmes.innerHTML = "";
    detalhesDoFilme.innerHTML ="";
    console.log(listaFilmes);
    if(filmes.length > 0){
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



