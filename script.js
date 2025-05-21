class calculatrice {

//PROPRIETE STATIQUE

static valeur_a = ""
static valeur_b = ""
static operateur = ""
static resultat = ""

//FONCTION STATIQUE POUR CHIFFRE

static zer() {
    if (this.operateur == "") {
        this.valeur_a += "0"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "0"
        document.getElementById("resultScreen").textContent=this.valeur_a}
}

static one() {
    if (this.operateur == "") {
        this.valeur_a += "1"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "1" 
        document.getElementById("resultScreen").textContent=this.valeur_b} 
}

static two() {
    if (this.operateur == "") {
        this.valeur_a += "2"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "2"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static thr() {
    if (this.operateur == "") {
        this.valeur_a += "3"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "3"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static fou() {
    if (this.operateur == "") {
        this.valeur_a += "4"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "4"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static fiv() {
    if (this.operateur == "") {
        this.valeur_a += "5"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "5"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static six() {
    if (this.operateur == "") {this.valeur_a += "6"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "6"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static sev() {
    if (this.operateur == "") {
        this.valeur_a += "7"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "7"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static eig() {
    if (this.operateur == "") {
        this.valeur_a += "8"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "8"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

static nin() {
    if (this.operateur == "") {
        this.valeur_a += "9"
        document.getElementById("resultScreen").textContent=this.valeur_a}
    else if (this.operateur == "+" || "-" || "*" || "/") {
        this.valeur_b += "9"
        document.getElementById("resultScreen").textContent=this.valeur_b}
}

//FONCTION STATQUE POUR OPERATEUR

static adi() {this.operateur = "+"}

static sou() {this.operateur = "-"}

static mul() {this.operateur = "*"}

static div() {this.operateur = "/"}

//FONCTION STATIQUE POUR RESULTAT

static res() {
    if (this.operateur == "+") {
        this.resultat = parseInt(calculatrice.valeur_a) + parseInt(calculatrice.valeur_b)
        document.getElementById("resultScreen").textContent=this.resultat
        this.valeur_a = ""
        this.valeur_b = ""
        this.operateur = ""
    }

    else if (this.operateur == "-") {
        this.resultat = parseInt(calculatrice.valeur_a) - parseInt(calculatrice.valeur_b)
        document.getElementById("resultScreen").textContent=this.resultat
        this.valeur_a = ""
        this.valeur_b = ""
        this.operateur = ""
    }

    else if (this.operateur == "*") {
        this.resultat = parseInt(calculatrice.valeur_a) * parseInt(calculatrice.valeur_b)
        document.getElementById("resultScreen").textContent=this.resultat
        this.valeur_a = ""
        this.valeur_b = ""
        this.operateur = ""
    }

    else if (this.operateur == "/") {
        this.resultat = parseInt(calculatrice.valeur_a) / parseInt(calculatrice.valeur_b)
        document.getElementById("resultScreen").textContent=this.resultat
        this.valeur_a = ""
        this.valeur_b = ""
        this.operateur = ""
    }
}
}