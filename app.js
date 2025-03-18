// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombresAmigos = [];
function agregarAmigo(){
  let nomberAmigoElemento = document.getElementById('amigo');
  if(nomberAmigoElemento.vale != '' && nomberAmigoElemento.value != undefined ){
    listaNombresAmigos.push(nomberAmigoElemento.value);
    nomberAmigoElemento.value = '';
    console.log(listaNombresAmigos);
    pintarAmigos();
  }else{
    alert('Por favor, inserte un unombre.');
  }
}

function pintarAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let i = 0; i < listaNombresAmigos.length; i++) {
    let nuevoElemento = document.createElement('li'); 
    nuevoElemento.textContent = listaNombresAmigos[i];
    listaAmigos.appendChild(nuevoElemento); 
  }
}

function sortearAmigo(){
  let listaAmigos = document.getElementById('listaAmigos');
  let listaResultado = document.getElementById('resultado');
  if(listaNombresAmigos.length == 0){
    alert('No ha ingresado ningún amigo. Por favor, ingrese un amigo.');
  }else{
    let numeroRandom =  Math.floor(Math.random()*listaNombresAmigos.length)+1;
    let amigoRandom = listaNombresAmigos[numeroRandom-1];
    listaAmigos.innerHTML = ''; 
    listaResultado.innerHTML = `<li>El amigo secreto es ${amigoRandom}</li>`; 
  }
}