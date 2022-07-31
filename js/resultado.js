// CALCULAR RESULTADOS
let resultado = document.getElementById("resultado");
let clear = document.getElementById("clear");

const agregar = (x) => {
   resultado.innerHTML += x;
}

clear.addEventListener("click", () => {
   resultado.innerHTML = "";
})

const equal = () => {
   if (resultado) {
      document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
   }
}