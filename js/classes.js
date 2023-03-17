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
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, atores, classificacao, rated, btnInformacoes){
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
        this.btnInformacoes = btnInformacoes;
    }

    getCard = async() =>{
        let card = document.createElement("div");
        card.setAttribute("class","card");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-top");
        imgCartaz.setAttribute("id", "bunnerImg")
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

        this.setBtnInformacoes();
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divMaisDetalhes);
        cardBody.appendChild(this.btnInformacoes);

        return card;
    }

    setBtnInformacoes = ()=>{
        this.btnInformacoes = document.createElement("button");
        this.btnInformacoes.appendChild(document.createTextNode("Mais Detalhes"));
        this.btnInformacoes.setAttribute("class","btn btn-outline-danger btn-detalhes");
        this.btnInformacoes.setAttribute("id", this.id);
    }

    getCardDetalhes = ()=>{
        let divInformacoes = document.createElement("div");
        divInformacoes.setAttribute("id", "informacoes");
        divInformacoes.setAttribute("class", "card mb-3");

        let algumaCoisa = document.createElement("div");
        algumaCoisa.setAttribute("class", "row g-0");

        let bunner = document.createElement("div");
        bunner.setAttribute("class","col-md-4");

        let bunnerImg = document.createElement("img");
        bunnerImg.setAttribute("src",this.cartaz);
        bunnerImg.setAttribute("class", "img-fluid rounded-start");

        




        let todosDetalhes = document.createElement("div");
        todosDetalhes.setAttribute("id", "todosDetalhes");
        todosDetalhes.setAttribute("class", "col-md-8");

        let maisDetalhes = document.createElement("div");
        maisDetalhes.setAttribute("class", "card-body");

        let titulo = document.createElement("h1");
        titulo.setAttribute("class", "card-title");
        titulo.appendChild(document.createTextNode(this.titulo));

        let sinopse = document.createElement("h10");
        sinopse.setAttribute("class", "card-text");
        sinopse.appendChild(document.createTextNode(this.sinopse));

        let anoDoFilme = document.createElement("h5");
        anoDoFilme.appendChild(document.createTextNode("Ano: " + this.ano));
        anoDoFilme.setAttribute("class", "card-text");

        let atores = document.createElement("h5");
        atores.setAttribute("class", "card-text");
        atores.appendChild(document.createTextNode("Elenco: " + this.atores));

        let direcao = document.createElement("h5");
        direcao.setAttribute("class", "card-text");
        direcao.appendChild(document.createTextNode("Direcao: " + this.direcao));

        let classificacao = document.createElement("h5");
        classificacao.setAttribute("class", "card-text");
        classificacao.appendChild(document.createTextNode("Classificacao: " + this.classificacao));

        let avaliacao = document.createElement("h5");
        avaliacao.setAttribute("class", "card-text");
        avaliacao.appendChild(document.createTextNode("Avaliacao: " + this.rated));

        divInformacoes.appendChild(bunner);
        bunner.appendChild(bunnerImg);

        divInformacoes.appendChild(algumaCoisa);
        algumaCoisa.appendChild(bunner);
        bunner.appendChild(bunnerImg);

        algumaCoisa.appendChild(todosDetalhes);
        todosDetalhes.appendChild(maisDetalhes);

        maisDetalhes.appendChild(titulo);
        maisDetalhes.appendChild(sinopse);
        maisDetalhes.appendChild(anoDoFilme);
        maisDetalhes.appendChild(atores);
        maisDetalhes.appendChild(direcao);
        maisDetalhes.appendChild(classificacao);
        maisDetalhes.appendChild(avaliacao);


        return divInformacoes
    }
}





