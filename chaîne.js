// fonction qui inverse une chaine de caractere
function reverseString(chaine) {
    //chaine = Array.from(chaine); conversion du sting en tableau
  
    chaine = chaine.split(""); //séparation des lettres
    chaine = chaine.reverse(); //renversement des lettres
    chaine = chaine.join(""); //joindre les lettres
  
    alert(chaine);
  }
  reverseString("montagne");
  
  // pour mettre le mot en majuscule
  let mot = "village";
  mot = mot.toUpperCase();
  alert("mot mis en majuscule : " + mot);
  
  // compter le nombre de caractere
  let nom = "je suis chez moi";
  alert("le nombre de caractères de nom : " + nom.length + " caractères");