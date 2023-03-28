class BaseCalculator {
    constructor() {
        this.ecran = document.getElementById("ecran");
        this.res = document.getElementById("res");
        this.list=[]
    }
  
    ecrit(touche) {
        if(this.ecran.value.length==0 && this.list.length>0){        //Si il y a eu un clear ou egal precedemment et que l'uttilisateur appui sur une touche la liste est réinitialisé
            this.list=[]
            this.list.push(touche)
            this.ecran.value += touche;
        }
        else{                                                        //Sinon on ajoute juste à ecran et a liste la touche tapé
            this.list.push(touche)
            this.ecran.value += touche;
        }
    }
  
    calcul() {
        let res = eval(this.ecran.value);
        this.res.innerHTML = this.ecran.value + "=" + res;
        this.ecran.value = "";
    }

    retour(){
        if(this.ecran.value.length==this.list.length){           //Dans le cas ou il n'y a pas eu de clear ou égal on efface juste le dernier caractère
            this.list.pop();
            let valeurActuel =this.ecran.value;                               
            this.ecran.value= valeurActuel.slice(0,-1); 
        }
        else{                                                    //Si il y a eu un clear ou égal alors on reprends les valeur stocké dans la liste et on les affiche de nouveau
            for(let i=0;i<this.list.length;i++){
                this.ecran.value+=this.list[i]
            }
        }
    }

    ALLclear() {
        this.ecran.value = "";
    }
  }
  let baseCalculator = new BaseCalculator();

