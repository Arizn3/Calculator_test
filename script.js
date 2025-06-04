class calculatrice {
    //PROPRIETES STATIQUES
    static valeur_A = '';
    static valeur_B = '';
    static operateur = '';
    static resultat = '';
    //FONCTION STATIQUE POUR CHIFFRES
    static verifierValeurs(valeur) {
        if (this.operateur == '') {
            this.valeur_A += valeur;
            document.getElementById('affichage').textContent = this.valeur_A;
        }
        else if (this.operateur == '+' || '-' || '*' || '/') {
            this.valeur_B += valeur;
            document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B;
        }
    }
    //FONCTION STATQUE POUR OPERATEURS
    static verifierOperateur(operateur) {
        this.operateur = operateur;
        document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur;
    }
    //FONCTION STATIQUE POUR RESULTAT
    static operation() {
        switch (this.operateur) {
            case "+":
                this.resultat = parseInt(calculatrice.valeur_A) + parseInt(calculatrice.valeur_B);
                document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + this.resultat;
                this.valeur_A = '';
                this.valeur_B = '';
                this.operateur = '';
                break;
            case "-":
                this.resultat = parseInt(calculatrice.valeur_A) - parseInt(calculatrice.valeur_B);
                document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + this.resultat;
                this.valeur_A = '';
                this.valeur_B = '';
                this.operateur = '';
                break;
            case "*":
                this.resultat = parseInt(calculatrice.valeur_A) * parseInt(calculatrice.valeur_B);
                document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + this.resultat;
                this.valeur_A = '';
                this.valeur_B = '';
                this.operateur = '';
                break;
            case "/":
                this.resultat = parseInt(calculatrice.valeur_A) / parseInt(calculatrice.valeur_B);
                document.getElementById('affichage').textContent = this.valeur_A + ' ' + this.operateur + ' ' + this.valeur_B + ' = ' + this.resultat;
                this.valeur_A = '';
                this.valeur_B = '';
                this.operateur = '';
                break;
            default:
                break;
        }
    }
}