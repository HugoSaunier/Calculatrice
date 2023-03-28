function Affiche(chiffre){                                 /*la fonction affiche ajoute le chiffre rentré par l'uttilisateur*/
    var ecran = document.getElementById("ecran");          /*on créé un variable ecran afin de pouvoir modifier par la suite la valeur de la case*/
    ecran.value+=chiffre;                                  /*on ajoute la valeur du bouton àla valeur de la case ecran */
}

function Boutonclear(){                                          /*la fonction clear retire le dernier élément de l'écran*/
    var ecran = document.getElementById("ecran");                /*on créé un variable ecran afin de pouvoir modifier par la suite la valeur de la case*/
    var valeurActuel =ecran.value;                               /*on créé une variable qui prend la valeur de l'écran*/
    ecran.value= valeurActuel.slice(0,-1);                       /*on retire donc le dernier charactère de la chaîne*/
}
function calcul(){                                                /*la fonction calcul effectue le calcul lorsque la touche egal est préssé*/
    var res = eval(ecran.value);                                  /*on créé la variable res avec comme valeur le résultat de notre clacul*/
    document.getElementById("res").innerHTML=ecran.value+"="+res; /*On affiche le résultat dans la case prévu à cet effet*/
    ecran.value="";                                               /*on réinitialise l'ecran*/
}
function ALLclear(){              /*la fonction ALLclear efface tout les charactère*/
    ecran.value="";               /*on réinitialise l'ecran*/
}

