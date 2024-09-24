// CRIAR REFERENCIAS AOS ELEMENTOS QUE QUERO MANIPULAR


// CLICK NO BOTÃO
const frm = document.querySelector("form");
const resp = document.querySelector("h2");


frm.addEventListener("submit", (e) => {
    
    e.preventDefault(); // PREVENDE O SUBMITE DO FORMULÃ��RIO
    const nome = frm.nome.value;
    resp.innerText = ("Olá " + nome + " Seja bem vindo ao nosso site! Gentileza informar suas notas para calcular a média.");
    const n1 = Number(frm.n1.value);
    const n2 = Number(frm.n2.value);
    const n3 = Number(frm.n3.value);
    const n4 = Number(frm.n4.value);

    const media = (n1 + n2 + n3 + n4) / 4;

    resp.innerText = `nA média das suas notas é:` ${media};

    



});