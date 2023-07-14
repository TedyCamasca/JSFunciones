

function calcularAreaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
  }
  
  var base = 4;
  var altura = 3;
  var areaTriangulo = calcularAreaTriangulo(base, altura);
  console.log("El área del triángulo es: " + areaTriangulo);

  /////////////////////////////////////

  function calcularAreaCirculo(radio) {
    var pi = 3.1416
    var area = pi * (radio * radio)
    return area;
  }
  
  
  var radio = 3;
  var areaCirculo = calcularAreaCirculo(radio);
  console.log("El área del círculo es: " + areaCirculo);
  

    /////////////////////////////////////

  function promedioNumeros (num1, num2, num3, num4, num5){
    const promedio = (num1 + num2 + num3 + num4 + num5) /5;
    return `El promedio de 5 es ${promedio}`;
}
    console.log(promedioNumeros(1,2,3,4,5));

     /////////////////////////////////////

  function parOImpar(num){
    return num%2==0 ? 'Es numero par' : 'Es numero impar'
}
console.log(parOImpar(7))
  
