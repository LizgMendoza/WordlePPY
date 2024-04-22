
let oportunidad = 6;
let diccionario = ['ABETO', ' ACTOR', 'AGUAS', 'AGUDO', 'ALADO', 'ALTAR', 'AVIÓN', 'AZUL','BALAS','BEBÉS','BICHO','BIZCO','BUENO','BUSCA','CAJAS', 'CALMA', 'CAMPO', 'CANAS', 'CARRO', 'CASAS', 'CAÍDA','CEJAS', 'CERCA', 'CERDO', 'CIEGO', 'CLAVO', 'COSAS', 'CURAR'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    window.addEventListener('load', init)
    const GRID = document.getElementById("grid");
    function init() {
        console.log('Esto se ejecuta solo cuando se carga la pagina web')
    }
    const button = document.getElementById("guess-button");
    button.addEventListener("click", intentar);
    function intentar(){
        console.log("Intento!")
    }

    function intentar(){
        const INTENTO = leerIntento();
        console.log(INTENTO)
        const ROW = document.createElement('div');
        ROW.className = 'row';

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO === palabra ) {
            SPAN.innerHTML = INTENTO;
            SPAN.style.backgroundColor = '#0CCE6B';
            console.log("GANASTE!")
            terminar("<h1> GANASTE! :D</h1>")
        }
        
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#0CCE6B';
            console.log(INTENTO[i], "VERDE")

        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#FFBD00';
            console.log(INTENTO[i], "AMARILLO")

        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#6F8695';
            console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
        oportunidad--;

    if (oportunidad==0){
        terminar("<h1>PERDISTE :(</h1>")
        console.log("PERDISTE")
    }
    }
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
    function leerIntento(){
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase(); 
        return intento;
    }
    