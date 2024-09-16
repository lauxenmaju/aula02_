var area = document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome ===''||nome===null){
        alert('Algo deu errado');
        area.innerHTML = 'Clique no botão para acessar';
    }else{

        //area.innerHTML = 'Clique no botão para acessar';
        area.innerHTML = "Bem vindo " + nome+" ";
    
        let botaoSair = document.createElement('button');
        botaoSair.innerText="Sair da conrta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }

}

function sair(){
    alert("Até mais nobre!");
    area.innerHTML="Você saiu!";
}

function mediaAluno(nota1,nota2){
    var media = (nota1+nota2)/2;

    if(media>=6){
        console.log("Você foi aprovado")+media;
    }else if(media<=6){
        console.log("Você não foi aprovado")
    }
}

function aluno(nome,curso){
    var mensagem = "Seja bem vindo "+nome+"ao curso "+curso;
    console.log(mensagem);
}