// CRIAR REFERENCIAS AOS ELEMENTOS QUE QUERO MANIPULAR


// CLICK NO BOTÃO
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const media = document.querySelector("h2");


frm.addEventListener("submit", (e) => {
    e.preventDefault(); // PREVENDE O SUBMITE DO FORMULÃ��RIO
    const nome = frm.inNome.value;
    resp.innerText =`Olá ${nome} Seja bem vindo ao nosso site!`;


    const n1 = parseFloat(frm.n1.value);
    const n2 = parseFloat(frm.n2.value);
    const n3 = parseFloat(frm.n3.value);
    const n4 = parseFloat(frm.n4.value);

    const mediaAluno = ((n1 + n2 + n3 + n4) / 4);

    media.innerText = `A media final é ${mediaAluno.toFixed(2)}`;

    if(mediaAluno>=7) {
        resp.innerText="Colando até eu - Aprovado"; 
        media.style.color="Blue";
    }
    if(mediaAluno<=6.9 && mediaAluno>=4){
        resp.innerText="Ta na Bosta - Recuperação";
        media.style.color="Green";
    }
    if(mediaAluno<3.9){
        resp.innerText="Se fodeu - Reprovado";
        media.style.color="red;"

    }
    
});