function calc(){
    let peso = document.getElementById('p').value
    let altura =  document.getElementById('a').value
    let imc = peso / (altura * altura)
    let resultado = document.getElementById('resultado')

    if(imc < 18.5){
        resultado.innerHTML = '<h1>Abaixo do peso<h1>'
    }else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML = '<h1>Peso Ideal<h1>'
    }else if(imc >= 25 && imc < 30){
        resultado.innerHTML = '<h1>Sobrepeso<h1>'
    }else if(imc >= 30 && imc < 35){
        resultado.innerHTML = '<h1>Obesidade Grau I<h1>'
    }else if(imc >= 35 && imc < 40){
        resultado.innerHTML = '<h1>Obesidade Grau II<h1>'
    }else if(imc >= 40){
        resultado.innerHTML = '<h1>Obesidade Grau III<h1>'
    }else{
        resultado.innerHTML = '<h1>Valores Inválidos<h1>'
    }
}