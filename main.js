
// 1  imc = peso/ altura^2
function calculaImc(peso, altura){
    if (altura > 3){
        return (peso/(altura*altura)*10**4).toFixed(1);

    }else{
        return (peso/(altura*altura)).toFixed(1); 
    }
}
// 2 - Fatorial de um numero dado
function fatorial(num){
    let resultado= 1;
    for (i=1 ; i<=num ; i++){
        resultado=resultado*i;
    }
    return resultado;
}

// Outra Forma de fazer fatorial
    function fato(xx) { 
        let fat = xx; 
        if (fat == 1){ 
            return fat; 
        } else { 
            return fat * fato (xx - 1); 
        }
    }
//

// 3 - Converte valor em dolar para um valor em real
function cambioDolarReal(dolar){
    return parseFloat((dolar*4.80).toFixed(2));
}

// 4 - Calcula area e perimetro
function areaPerimetro(altura, largura){
    let area = altura*largura;
    let perimetro = (altura+largura)*2;
    console.log(`Area = ${area}; Perimetro = ${perimetro};`);
}

// 5 - Calcula Area circulo
function areaCirculo(raio){
    let area = Math.PI*raio**2;
    console.log(area);
}

// 6 - Imprime no console a tabuada de um numero dado
function tabuada(valor){
    for(i=1; cont<=10; i++){
        console.log(`${cont} x ${valor} = ${cont*valor}`);
    }
}