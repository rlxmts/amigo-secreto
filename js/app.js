let listaDeAmigos = [];
const resultado = document.querySelector('#lista-sorteio');
const listaAmigos = document.querySelector('#lista-amigos');


function adicionar(){
    let amigo = document.querySelector('#nome-amigo');
    if(amigo.value != ''){
        listaDeAmigos.push(amigo.value);
        listaAmigos.innerText = `${listaDeAmigos}`;
    }
    amigo.value = '';
}

function sortear(){
    embaralha(listaDeAmigos);    
    for( i=0; i < listaDeAmigos.length; i++){
        if( i == listaDeAmigos.length - 1){
        resultado.innerHTML = resultado.innerHTML + `${listaDeAmigos[i]} >>>>>> ${listaDeAmigos[0]}`
        }else{
            resultado.innerHTML = resultado.innerHTML + `${listaDeAmigos[i]} >>>>>> ${listaDeAmigos[i + 1]} <br>`;
        }
    }
}

function reiniciar() {
    listaDeAmigos = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}


function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        const elemento = lista[indice - 1];
        lista[indice - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;
    }
}
