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

==================================================================================================================

<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>

              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">---</h5>
                  
                  <a href="#" class="btn btn-primary">Mais Detalhes</a>
                  <input type="checkbox">Favoritos
                </div>
              </div>
