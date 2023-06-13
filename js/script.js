const mots = ["yao", "adjoua","Grace"]
const form = document.querySelector("form")
let bienvenue = document.querySelector("#bienvenue")
let nom = document.querySelector("#nom")
let jeux = document.querySelector("#jeux")
let bouton_valider = document.querySelector("#bouton_valider")
let score = document.querySelector("#score")
let mot_devinette = document.querySelector("#mot_devinette")
let point = 0
let compteur = 0
let input_ecriture = document.querySelector("#input_ecriture")
let fin = document.querySelector("#fin")
let nom_fin = document.querySelector("#nom_fin")
let score_final = document.querySelector("#score_final")
let bouton_recommencer = document.querySelector("#recommencer")

score.textContent = point
mot_devinette.textContent = mots[0]




//ecouter l'evenement form
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (nom.value ===''){
        alert("Entrer un nom")
    }
    else{
        bienvenue.textContent = "Bienvenue dans mon jeux "+nom.value
        jeux.style.display="block"
        form.style.display="none"

    }
    
})


//ecourter le bouton valider
bouton_valider.addEventListener("click", (e)=>{
    e.preventDefault()

    if(compteur < mots.length){
        if (input_ecriture.value === mots[compteur]) {

            point += 1
            score.textContent = point
            
        }
        input_ecriture.value = ""
        compteur += 1
        mot_devinette.textContent = mots[compteur]
    }

    if(compteur>=mots.length){
        jeux.style.display="none"
        fin.style.display="block"
        if (point < mots.length/2){
            bienvenue.textContent = "Désolé, vous avez perdu la partie "+nom.value 
        }
        else{
            if(point == mots.length){
                bienvenue.textContent = "Félicitation "+nom.value +", vous êtes super doué"
            }
            else{
                bienvenue.textContent = "Félicitation "+nom.value +", vous pouvez faire encore mieux"

            }
            
        }
        nom_fin.textContent = nom.value
        score_final.textContent = point
    }
})

//ecouter le  bouton recommencer
bouton_recommencer.addEventListener("click", (e)=>{
    e.preventDefault()
    point = 0
    compteur = 0
    nom.value = ""
    bienvenue.textContent = "bienvenue sur mon jeux"
    score.textContent = point
    mot_devinette.textContent = mots[0]
    form.style.display = "block"
    fin.style.display = "none"

})