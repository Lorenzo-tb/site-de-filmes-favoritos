class Ator{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Diretor{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, atores, classificacao, rated){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.cartaz = cartaz;
        this.sinopse = sinopse;
        this.direcao = direcao;
        this.atores = atores;
        this.classificacao = classificacao;
        this.rated = rated;
        
        this.duracao = duracao;
    }
    getCard = async() =>{
        let card = document.createElement("div");
        card.setAttribute("class","card");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");

        let divMaisDetalhes = document.createElement("div");
        divMaisDetalhes.setAttribute("style","display:flex; justify-content:space-around;");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style","flex-grow:1;");

        let divAno = document.createElement("div");
        divAno.setAttribute("style","flex-grow:1;");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAno.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));

        divMaisDetalhes.appendChild(divGenero);
        divMaisDetalhes.appendChild(divAno);
        divMaisDetalhes.appendChild(divClassificacao);

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);

        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divMaisDetalhes);

        return card;
    }
}





