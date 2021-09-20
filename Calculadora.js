class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    pi(num1){
        return num1 * 3.1416;
    }

    potencia(num1,num2){
        return Math.pow(num1, num2);
    }

    raiz(num1){
        return Math.sqrt(num1);
    }

    sin(num1){
        return Math.sin(num1);
    }

    cos(num1){
        return Math.cos(num1);
    }

    tan(num1){
        return Math.tan(num1);
    }

    log(num1){
        return Math.log(num1);
    }

    percent(num1, num2){
        return ((num1/100)*num2);
    }
}
