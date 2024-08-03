// pour le maximum et le minimum
const tab = [2, 4, 73, 23, 10, 1];
let max = tab[0];
let min = tab[0];
for (let i = 0; i < tab.length; i++) {
  if (tab[i] > max) {
    max = tab[i];
  } else {
    min = tab[i];
  }
}
alert("le maximum du tableau  : " + max);
alert("le minimum du tableau  : " + min);

//faire la somme d'un tableau
let tableau = [2, 4, 12, 23, 10, 1];
let somme = 0;
for (let i = 0; i < tableau.length; ++i) {
  somme += tableau[i];
}
alert("la somme du tableau : " + somme);

// filtrer le tableau
const nomb = [-2, -4, 73, 23, -10, 1];
const filtrer = nomb.filter(function (value) {
  return value > 0;
});
alert("les nombres positifs : " + filtrer);