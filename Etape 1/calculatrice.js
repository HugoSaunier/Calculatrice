function Affiche(i){
    var ecran = document.getElementById("ecran");
    ecran.value+=i;
    console.log(i);
}
function Boutonclear(){
    var ecran = document.getElementById("ecran");
    var valeurActuel =ecran.value;
    ecran.value= valeurActuel.slice(0,-1);
}
function calcul(){
    var res = eval(ecran.value)
    ecran.value=""
    console.log(res)
}
