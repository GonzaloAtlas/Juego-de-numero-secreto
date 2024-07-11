let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto)
    console.log(`Lo has intentado  ${intentos}${(intentos===1)?" vez":" veces"}`)
    if(numeroDeUsuario === numeroSecreto){
    // El usuario acertó
        asignarTextoElemento("p",`Acertaste el número secreto en ${intentos} ${(numeroDeUsuario===1)?"vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   
    // el usuario no acertó
    else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++
        limpiarcaja();
    }
    return;
}
function limpiarcaja(){
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los números 

    if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento("p","Ya se han sorteado todos los números posibles") 
    } else {
        //si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Bienvenido al juego del número secreto");
    asignarTextoElemento("p", `Escoge un número entre 1 y ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // limpiar caja
    limpiarcaja();
    // mostrar mensaje del intervalo del numero secereto
    // generar el número aleatorio
    // inicializar el numero intentos 
    condicionesIniciales();
    // deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
