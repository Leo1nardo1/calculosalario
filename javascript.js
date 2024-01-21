function calcular(){
  salarioBruto = parseFloat(document.getElementById("salarioBruto").value);

  let inssDesconto = salarioBruto * 0.05;

  let irDesconto;

  if(salarioBruto >= 3500){
    irDesconto = salarioBruto * 0.18;
  }else{
    irDesconto = salarioBruto * 0.08;
  }

  const salarioLiquido = salarioBruto - irDesconto - inssDesconto;

  const result = document.getElementById("result");

  result.textContent = `O seu salário líquido é: R$ ${salarioLiquido},00`;

  result.style.display = "block";
  

}
var hoje = new Date().getHours();
if (hoje >= 7 && today <= 19) {
   document.body.style.background = "White";
} else {
    document.body.style.background = "Black";
}