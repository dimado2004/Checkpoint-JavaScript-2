// fonction factorielle
function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }
  
  alert("le factoriel de 5 est : " + factorial(5));
  
  //      vérifier si un nombre est premier
  function isPrime(nbr) {
    if (nbr === 2 || nbr === 3) {
      return true;
    }
    if (nbr === 1 || nbr % 2 == 0) {
      // si le nbr est égal à 1 ou le nbr est pair
      return false;
    }
    for (let i = 3; i < Math.sqrt(nbr); i += 2) {
      if (nbr % i === 0) {
        return false;
      }
    }
  }
  console.log(isPrime(17));
  
  //fonction pour générer la suite de Fibonacci
  function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  alert(fib(9));