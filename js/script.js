let botaoBusca = document.querySelector("#botaoBusca");
let inputBusca = document.querySelector("#inputBusca");
let btnLimpar = document.querySelector("#limpar");
let btnFavoritos = document.querySelector("#favoritos");
let urlBusca = "https://www.omdbapi.com/?apikey=79dc6bc4&s=";
let urlId = "https://www.omdbapi.com/?apikey=79dc6bc4&i=";




let num = localStorage.length;
console.log(num);


//limpar localStorage ==============================================================================================
btnLimpar.onclick=(e) =>{
    localStorage.clear();
    num = localStorage.length;
    console.log(num);
     
}


//para buscar filmes na barra de pesquisa===========================================================================
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
            console.log(filmes);
            listarFilmes(filmes);
        })
    }
    return false;
}

//gerar detalhes do filme ==============================================================================================
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

        let editor = document.querySelector("#editar");
        let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
        let listaFilmes = document.querySelector("#lista-filmes");
        detalhesDoFilme.innerHTML = "";
        console.log(detalhesDoFilme);
        console.log(filme.getCardDetalhes());
        editor.innerHTML="";
        listaFilmes.innerHTML = "";
        detalhesDoFilme.style.display = "flex";
        detalhesDoFilme.appendChild(filme.getCardDetalhes());
        console.log(detalhesDoFilme);

        //fechar os detalhes do filme
        document.querySelector("#botaoFechar").onclick = ()=>{
            detalhesDoFilme.innerHTML = "";
            listaFilmes.style.display="flex";
            detalhesDoFilme.style.display="none";
        }

        document.querySelector("#btnEditar").onclick = ()=>{
            let editor = document.querySelector("#editar");
            editor.style.display="flex"
            listaFilmes.style.display="none";
            detalhesDoFilme.style.display="none";
            detalhesDoFilme.innerHTML = "";

            editor.appendChild(filme.getCardEditar());

            document.querySelector("#botaoSalvar").onclick = async()=>{

                let inputTitulo = document.querySelector("#inputTi");
                let inputSinopse = document.querySelector("#inputSin");
                let does = true;

                for(let aux=0; aux<localStorage.length; aux++){
                    if(filme.id == JSON.parse(localStorage[aux]).id){
                        console.log("eh igual");
                        console.log(inputTitulo.value);
                        let filmeAtual = JSON.parse(localStorage[aux]);

                        console.log(filmeAtual);

                        console.log(filmeAtual.titulo);
                        console.log(filmeAtual.sinopse);

                        filmeAtual.titulo = inputTitulo.value;
                        filmeAtual.sinopse = inputSinopse.value;

                        console.log(filmeAtual.titulo);
                        console.log(filmeAtual.sinopse);
                        console.log(filmeAtual);

                        localStorage[aux] = JSON.stringify(filmeAtual);
                        console.log(localStorage[aux]);

                        /*JSON.parse(localStorage[aux]).titulo = inputTitulo.value;
                        JSON.parse(localStorage[aux]).sinopse = inputSinopse.value;

                        console.log(JSON.parse(localStorage[aux]).id);
                        console.log(JSON.parse(localStorage[aux]).titulo);
                        console.log(JSON.parse(localStorage[aux]).sinopse);*/
                        does = false;
                        break;
                    }

                }
                if(does){
                    alert("O filme nao esta favoritado para edita-lo!")
                }
            }

            document.querySelector("#botaoFecharEdicao").onclick = async()=>{
                detalhesDoFilme.innerHTML = "";
                editor.innerHTML = "";
                listaFilmes.style.display="flex";
                detalhesDoFilme.style.display="none";
            }
        }


        //favoritar o filme no localStorage
        document.querySelector("#botaoFavoritar").onclick =()=>{
            let fazer = false;

            for(let aux=0;aux<localStorage.length; aux++){
                let filmeAtual = JSON.parse(localStorage[aux]);
                if(filme.id == filmeAtual.id){
                    fazer = true;
                    break;
                }
            }

            if(fazer == false){
                var filmesString = localStorage;
                let filmeString = JSON.stringify(filme);
                filmesString.setItem(localStorage.length, filmeString);
                console.log(filmesString)
                console.log(JSON.parse(localStorage[num]))
                num = localStorage.length;
            }
        }

        //tirar o filme do localStorage
        document.querySelector("#botaoDesfavoritar").onclick=()=>{
            let fazer = false;


            for(let aux=0; aux<localStorage.length; aux++){
                let filmeAtual = JSON.parse(localStorage[aux]);
                if(filme.id == filmeAtual.id){
                    fazer = true;
                    localStorage.removeItem(aux);
                    console.log(localStorage);
                    break;
                }
            }

            if(fazer){
                let auxDois=0;
                for(let aux=0; aux<=localStorage.length; aux++){
                    let valorAntigo = localStorage.getItem(aux);

                    if(valorAntigo!=undefined){
                        localStorage[aux].setItem(auxDois, valorAntigo);
                        auxDois++;
                    }
                }
            }
        }

        listaFilmes.style.display="none";
    });
}



//mostrar filmes salvos no localStorage ==============================================================================
btnFavoritos.onclick = (e) =>{
    let filmesFavoritos = new Array();
        for(let aux=0; aux<=localStorage.length; aux++){

            if(localStorage.getItem(aux)!=null){
                console.log("teste");
                let item = JSON.parse(localStorage[aux]);
                let filme = new Filme(
                    item.id = aux,
                    item.titulo,
                    item.ano,
                    item.genero[0],
                    null,
                    item.cartaz,
                    null,
                    null,
                    null,
                    item.classificacao,
                    null
                );
                filmesFavoritos.push(filme);
            }
        }
    listarFilmesFavoritos(filmesFavoritos);
    console.log(filmesFavoritos);
};

//para listar filmes pesquisados na barra de pesquisa=====================================================================
let listarFilmes = async (filmes) =>{
    let listaFilmes = document.querySelector("#lista-filmes");
    let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
    let editor = document.querySelector("#editar");
    listaFilmes.innerHTML = "";
    editor.innerHTML="";
    listaFilmes.style.display="flex";
    detalhesDoFilme.innerHTML ="";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());
            filme.btnInformacoes.onclick=()=>{
                detalhesFilme(filme.id);
                
            }
        });
    }
}

let listarFilmesFavoritos = async(filmes)=>{
    let listaFilmes = document.querySelector("#lista-filmes");
    let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
    let editor = document.querySelector("#editar");
    listaFilmes.innerHTML = "";
    editor.innerHTML="";
    listaFilmes.style.display="flex";
    detalhesDoFilme.innerHTML ="";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());
            console.log(filme.id);
            filme.btnInformacoes.onclick=()=>{
                detalhesFilmeSegundo(filme.id);
                
            }
        });
    }
}

let detalhesFilmeSegundo= (numero) =>{

        console.log(numero);
        let resp = JSON.parse(localStorage[numero]);
        console.log(JSON.parse(localStorage[numero]));

        let filme = new Filme(
            resp.id,
            resp.titulo,
            resp.ano,
            resp.genero[0],
            resp.duracao,
            resp.cartaz,
            resp.sinopse,
            resp.direcao,
            resp.atores,
            resp.classificacao,
            resp.rated
        );

        console.log(filme);

        let editor = document.querySelector("#editar");
        let detalhesDoFilme = document.querySelector("#mostrar-o-filme");
        let listaFilmes = document.querySelector("#lista-filmes");
        detalhesDoFilme.innerHTML = "";
        console.log(detalhesDoFilme);
        console.log(filme.getCardDetalhes());
        editor.innerHTML="";
        listaFilmes.innerHTML = "";
        detalhesDoFilme.style.display = "flex";
        detalhesDoFilme.appendChild(filme.getCardDetalhes());
        console.log(detalhesDoFilme);

        //fechar os detalhes do filme
        document.querySelector("#botaoFechar").onclick = ()=>{
            detalhesDoFilme.innerHTML = "";
            listaFilmes.style.display="flex";
            detalhesDoFilme.style.display="none";
        }

        document.querySelector("#btnEditar").onclick = ()=>{
            let editor = document.querySelector("#editar");
            editor.style.display="flex"
            listaFilmes.style.display="none";
            detalhesDoFilme.style.display="none";
            detalhesDoFilme.innerHTML = "";

            editor.appendChild(filme.getCardEditar());

            document.querySelector("#botaoSalvar").onclick = async()=>{

                let inputTitulo = document.querySelector("#inputTi");
                let inputSinopse = document.querySelector("#inputSin");
                let does = true;

                for(let aux=0; aux<localStorage.length; aux++){
                    if(filme.id == JSON.parse(localStorage[aux]).id){
                        console.log("eh igual");
                        console.log(inputTitulo.value);
                        let filmeAtual = JSON.parse(localStorage[aux]);

                        console.log(filmeAtual);

                        console.log(filmeAtual.titulo);
                        console.log(filmeAtual.sinopse);

                        filmeAtual.titulo = inputTitulo.value;
                        filmeAtual.sinopse = inputSinopse.value;

                        console.log(filmeAtual.titulo);
                        console.log(filmeAtual.sinopse);
                        console.log(filmeAtual);

                        localStorage[aux] = JSON.stringify(filmeAtual);
                        console.log(localStorage[aux]);

                        does = false;
                        break;
                    }

                }
                if(does){
                    alert("O filme nao esta favoritado para edita-lo!")
                }
            }

            document.querySelector("#botaoFecharEdicao").onclick = async()=>{
                detalhesDoFilme.innerHTML = "";
                editor.innerHTML = "";
                listaFilmes.style.display="flex";
                detalhesDoFilme.style.display="none";
            }
        }


        //favoritar o filme no localStorage
        document.querySelector("#botaoFavoritar").onclick =()=>{
            let fazer = false;

            for(let aux=0;aux<localStorage.length; aux++){
                let filmeAtual = JSON.parse(localStorage[aux]);
                if(filme.id == filmeAtual.id){
                    fazer = true;
                    break;
                }
            }

            if(fazer == false){
                var filmesString = localStorage;
                let filmeString = JSON.stringify(filme);
                filmesString.setItem(localStorage.length, filmeString);
                console.log(filmesString)
                console.log(JSON.parse(localStorage[num]))
                num = localStorage.length;
            }
        }

        //tirar o filme do localStorage
        document.querySelector("#botaoDesfavoritar").onclick=()=>{
            let fazer = false;


            for(let aux=0; aux<localStorage.length; aux++){
                let filmeAtual = JSON.parse(localStorage[aux]);
                if(filme.id == filmeAtual.id){
                    fazer = true;
                    localStorage.removeItem(aux);
                    console.log(localStorage);
                    break;
                }
            }

            if(fazer){
                let auxDois=0;
                for(let aux=0; aux<=localStorage.length; aux++){
                    let valorAntigo = localStorage.getItem(aux);

                    if(valorAntigo!=undefined){
                        localStorage[aux].setItem(auxDois, valorAntigo);
                        auxDois++;
                    }
                }
            }
        }

        listaFilmes.style.display="none";
}

botaoBusca.onclick = async() =>{
    buscarFilme();
}



