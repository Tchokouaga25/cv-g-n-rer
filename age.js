// importation de l'image
document.getElementById("uploadImage").addEventListener("change", function(e) {
    let file = e.target.files[0];
    if (file) {
        let preview = document.getElementById("preview");
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

//nom complet
function updateCV() {
    let Nom = document.getElementById("name").value;
    document.getElementById("nom").textContent = Nom || "Entrer votre Nom complet";
}


//age
let AgeInput = document.getElementById("Age");

// Fonction pour valider l'âge
function updateAge() {
    let newAge = Number(AgeInput.value);
    
    if ( isNaN(newAge) || newAge < 18 || newAge > 65) {
        // Empêche de sortir du champ si la valeur est incorrecte
        AgeInput.focus();
        return false;
    }
    return true;
}

// Événement blur pour vérifier la valeur lorsqu'on quitte le champ
AgeInput.addEventListener("blur", function() {
    if (!updateAge()) {
        // Affiche un message d'erreur si nécessaire
        let errorMsg = document.getElementById("AgeError");
        errorMsg.classList.remove("hidden"); // Affiche l'erreur sinon
        AgeInput.classList.add("border-red-500");
        AgeInput.classList.remove("border-green-500");
    } else {
        // Cache le message d'erreur si la valeur est correcte
        let errorMsg = document.getElementById("AgeError");
        errorMsg.classList.add("hidden");
        AgeInput.classList.add("border-green-500");
        AgeInput.classList.remove("border-red-500");
    }
});


// Événement keydown pour empêcher de naviguer vers un autre champ avec Tab
AgeInput.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        if (!updateAge()) {
            event.preventDefault();
            AgeInput.focus();
        }
    }
});

//téléphone
function updatePhone() {
    let Phone = document.getElementById("Phone");
    let PhoneValue = Phone.value;
    let newPhone= document.getElementById("phone").textContent = PhoneValue || "Entrer votre numéro de téléphone";  
    let errorMsg = document.getElementById("TelError");
        const regex = /^[0-9]{0,9}$/;
        if (regex.test(newPhone)) {
            errorMsg.classList.add("hidden"); // Cache l'erreur si c'est bon
            Phone.classList.add("border-green-500");
            Phone.classList.remove("border-red-500");
        } else {
            errorMsg.classList.remove("hidden"); // Affiche l'erreur sinon
            Phone.classList.add("border-red-500");
            Phone.classList.remove("border-green-500");
        }
   
}
//adresse
function updateAdresse() {
    let Adresse = document.getElementById("Adresse").value;
    document.getElementById("adresse").textContent = Adresse || "Entrer votre adresse";
}

// Emails enregistrés
function validateEmail() {
    let emailInput = document.getElementById("email");
    let emailValue = emailInput.value;
    let newemail= document.getElementById("EEmail").textContent = emailValue || "Entrer votre email";
    let errorMsg = document.getElementById("emailError");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(newemail)) {
        errorMsg.classList.add("hidden"); // Cache l'erreur si c'est bon
        emailInput.classList.add("border-green-500");
        emailInput.classList.remove("border-red-500");
    } else {
        errorMsg.classList.remove("hidden"); // Affiche l'erreur sinon
        emailInput.classList.add("border-red-500");
        emailInput.classList.remove("border-green-500");
    }
}

document.getElementById("email").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le rechargement de la page
        validateEmail();
    }
});

// titre du poste
function updateTitrePoste() {
    let TitrePoste = document.getElementById("TitrePoste").value;
    document.getElementById("titreposte").textContent = TitrePoste || "Entrer votre Titre du Poste";
}

//Description
function updateDescription() {
    let Description = document.getElementById("Description").value;
    document.getElementById("description").textContent = Description || "Entrer votre Description";
}

// sexe
 
function toggleSexe(selected) {
    const femmeRadio = document.querySelector('input[name="femme"]');
    const hommeRadio = document.querySelector('input[name="homme"]');

    if (selected === femmeRadio) {
        hommeRadio.checked = false; // Désélectionne Homme si Femme est sélectionné
    } else if (selected === hommeRadio) {
        femmeRadio.checked = false; // Désélectionne Femme si Homme est sélectionné
    }

    updateSexe();
}

function updateSexe() {
    const sexeChecked = document.querySelector('input[name="femme"]:checked') || document.querySelector('input[name="homme"]:checked');
    const sexeResult = sexeChecked ? sexeChecked.value : "Aucune sélection";

    document.getElementById("sexe").innerHTML = sexeResult; 
}

// Ajout d'écouteurs d'événements femme ou homme 
document.querySelectorAll('input[name="femme"], input[name="homme"]').forEach((element) => {
    element.addEventListener('click', function() {
        toggleSexe(this);
    });
});
// votre status actuelle
function toggleSituation(selected) {
    const mariéRadio = document.querySelector('input[name="marié"]');
    const célibataireRadio = document.querySelector('input[name="célibataire"]');
    const veuveRadio = document.querySelector('input[name="veuve"]');

    if (mariéRadio && célibataireRadio && veuveRadio) {
        if (selected === mariéRadio) {
            célibataireRadio.checked = false ; // Désélectionne célibataire et veuve si marié est sélectionné
            veuveRadio.checked = false ;
        } else if (selected === célibataireRadio) {
            mariéRadio.checked = false ; // Désélectionne marié et veuve si celibataire est sélectionné
            veuveRadio.checked = false ;  
        }else if(selected === veuveRadio) {
            mariéRadio.checked = false ; // Désélectionne marié et célibataire si veuve est sélectionné
            célibataireRadio.checked = false ;
        }
           
}
       updateSituation();
}

function updateSituation() {
    const situationChecked = document.querySelector('input[name="marié"]:checked') || 
                             document.querySelector('input[name="célibataire"]:checked') || 
                             document.querySelector('input[name="veuve"]:checked');
    const situationResult = situationChecked ? situationChecked.value : "Aucune sélection";
    document.getElementById("situation").innerHTML = situationResult; 
}

document.querySelectorAll('input[name="marié"], input[name="célibataire"] ,input[name="veuve"] ').forEach((element) => {
    element.addEventListener('click', function() {
        toggleSituation(this);
    });
});

//compétence
function updateCompétence() {
    let Compétence = document.getElementById("Compétence").value;
    document.getElementById("compétence").textContent = Compétence || "Entrer vos compétence";
}


window.ajouterCompetences = function () {
    const Compétences = document.getElementById("Compétence").value.trim();

    if (Compétences !== "" ) {
        // Créer un identifiant unique pour cette expérience
        const uniqueId = "exp_" + Date.now();

        // Élément pour listeCompetences (avec bouton supprimer)
        const li = document.createElement("li");
        li.className = "list-Exp-item";
        li.dataset.id = uniqueId;
        li.innerHTML = `
            ${Compétences} 
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerExp('${uniqueId}')">❌</button>
        `;

        // Élément pour cvCompetences (sans bouton supprimer)
        const liCV = document.createElement("li");
        liCV.className = "list-Exp-item";
        liCV.dataset.id = uniqueId;
        liCV.textContent = `${Compétences} `;

        // Ajouter aux listes
        const listeCompetencesElement = document.getElementById("listeExp");
        if (listeCompetencesElement) {
            listeCompetencesElement.appendChild(li);
        } else {
            console.error("L'élément 'listeExp' n'a pas été trouvé");
        }

        const cvCompetencesElement = document.getElementById("cvExp"); // Correction ici
        if (cvCompetencesElement) {
            cvCompetencesElement.appendChild(liCV);
        } else {
            console.error("L'élément 'cvExp' n'a pas été trouvé");
        }

        // Réinitialiser les champs
        document.getElementById("Compétence").value = "";
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une expérience.");
    }
    // Réinitialiser l'affichage en temps réel
    document.getElementById("compétence").textContent = "";
};

window.supprimerExp = function (id) {
    // Supprimer de listeCompetences
    const itemToRemove = document.querySelector(`#listeExp li[data-id="${id}"]`);
    if (itemToRemove) {
        itemToRemove.remove();
    }

    // Supprimer de cvCompetences
    const itemToRemoveCV = document.querySelector(`#cvExp li[data-id="${id}"]`);
    if (itemToRemoveCV) {
        itemToRemoveCV.remove();
    }
};

// Formation
// Nom de Etablissement
function updateNomEtablissement() {
    let NomEtablissement = document.getElementById("NomEtablissement").value;
    document.getElementById("nomEtablissement").textContent = NomEtablissement || "Entrer votre profil";
}
//Diplomes obtenus
function updateDiplômesObtenus() {
    let DiplômesObtenus = document.getElementById("DiplômesObtenus").value;
    document.getElementById("diplômesObtenus").textContent = DiplômesObtenus || "Entrer votre profil";
}
// année d'obtention
function updateAnnéeObtention() {
    let AnnéeObtention = document.getElementById("AnnéeObtention").value;
    document.getElementById("annéeObtention").textContent = AnnéeObtention ;
}
function updat() {
    let BBboutton = document.getElementById("BBoutton").value;
    document.getElementById("bboutton").textContent = BBboutton ;
}


// ajouter fonction
window.ajouterFormation = function () {
    console.log("ajouterFormation() a été appelée !");
    const Nometablissement = document.getElementById("NomEtablissement").value.trim();
    const Diplômesobtenus = document.getElementById("DiplômesObtenus").value.trim();
    const Annéeobtention = document.getElementById("AnnéeObtention").value.trim();

    if (Nometablissement !== "" && Diplômesobtenus !== "" && Annéeobtention !== "" ) {
        // Créer un identifiant unique pour cette expérience
        const uniqueId = "exp_" + Date.now();

        // Élément pour listeCompetences (avec bouton supprimer)
        const li = document.createElement("li");
        li.className = "list-Formation-item";
        li.dataset.id = uniqueId;
        li.innerHTML = `
            ${Nometablissement} - ${Diplômesobtenus} - ${Annéeobtention} 
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerFormation('${uniqueId}')">❌</button>
        `;

        // Élément pour cvCompetences (sans bouton supprimer)
        const liCV = document.createElement("li");
        liCV.className = "list-Formation-item";
        liCV.dataset.id = uniqueId;
        liCV.textContent = `${Nometablissement} - ${Diplômesobtenus} - ${Annéeobtention} `;

        // Ajouter aux listes
        const listeCompetencesElement = document.getElementById("listeFormation");
        if (listeCompetencesElement) {
            listeCompetencesElement.appendChild(li);
        } else {
            console.error("L'élément 'listeFormation' n'a pas été trouvé");
        }

        const cvCompetencesElement = document.getElementById("cvFormation"); // Correction ici
        if (cvCompetencesElement) {
            cvCompetencesElement.appendChild(liCV);
        } else {
            console.error("L'élément 'cvFormation' n'a pas été trouvé");
        }

        // Réinitialiser les champs
        document.getElementById("NomEtablissement").value = "";
        document.getElementById("DiplômesObtenus").value = "";
        document.getElementById("AnnéeObtention").value = "";
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une expérience.");
    }
    // Réinitialiser l'affichage en temps réel
    document.getElementById("nomEtablissement").textContent = "";
    document.getElementById("diplômesObtenus").textContent = "";
    document.getElementById("annéeObtention").textContent = "";
   
};
window.supprimerFormation = function (id) {
    // Supprimer de listeCompetences
    const itemToRemove = document.querySelector(`#listeFormation li[data-id="${id}"]`);
    if (itemToRemove) {
        itemToRemove.remove();
    }

    // Supprimer de cvCompetences
    const itemToRemoveCV = document.querySelector(`#cvFormation li[data-id="${id}"]`);
    if (itemToRemoveCV) {
        itemToRemoveCV.remove();
    }
};

// Fonctions de mise à jour en temps réel qui gèrent plusieurs champs
// expérience professionnel
//NomEntreprise

function updateNomEntreprise() {
    let NomEntreprise = document.getElementById("NomEntreprise").value ;
    document.getElementById("nomentreprise").textContent = NomEntreprise || "Entrer le nom de l'entreprise";
    
}

//PosteOccupé
function updatePosteOccupé() {
    const inputElement = document.getElementById("PosteOccupés");
    
    if (!inputElement) {
        console.error("L'élément avec l'ID 'PosteOccupés' n'a pas été trouvé");
        return;
    }
    
    // Récupérer la valeur si l'élément existe
    let PosteOccupée = inputElement.value;
    
    // Chercher l'élément d'affichage
    const elementAffichage = document.getElementById("posteoccupé");
    
    if (!elementAffichage) {
        // Si l'élément n'existe pas, créons-le
        const newElement = document.createElement("span");
        newElement.id = "posteoccupé";
        // Insérer l'élément après l'input
        inputElement.parentNode.appendChild(newElement);
        newElement.textContent = PosteOccupée || "Entrer le poste occupé";
    } else {
        // Si l'élément existe, mettre à jour son contenu
        elementAffichage.textContent = PosteOccupée || "Entrer le poste occupé";
    }
}
// DuréeDébut
function updateDuréeDébut() {
    let DuréeDébut = document.getElementById("DuréeDébut").value ;
    document.getElementById("duréedébut").textContent = DuréeDébut || "Entrer la date de début";
    
}
// DuréeFin
function updateDuréeFin() {
    let DuréeFin = document.getElementById("DuréeFin").value ;
    document.getElementById("duréefin").textContent = DuréeFin || "Entrer la date de Fin";
    
}
// Nombre D'année
function updateNombreAnnée() {
    let NombreAnnée = document.getElementById("NombreAnnée").value ;
    document.getElementById("nombreannée").textContent = NombreAnnée || "Entrer le Nombre d'Année";
    
}
// DescriptionMissions
function updateDescriptionMissions() {
    let DescriptionMissions = document.getElementById("DescriptionMissions").value ;
    document.getElementById("descriptionmissions").textContent = DescriptionMissions || "Entrer la Description de Missions";
    
}


window.ajouterExpériences = function () {
    const Nomentreprise = document.getElementById("NomEntreprise").value.trim();
    const Posteoccupé = document.getElementById("PosteOccupés").value.trim();
    const Duréedébut = document.getElementById("DuréeDébut").value.trim();
    const Duréefin = document.getElementById("DuréeFin").value.trim();
    const Nombreannée = document.getElementById("NombreAnnée").value.trim();
    const Descriptionmissions = document.getElementById("DescriptionMissions").value.trim();

    if (Nomentreprise !== "" && Posteoccupé !== "" && Duréedébut !== "" && Duréefin !== "" && Nombreannée !== "" && Descriptionmissions !== "") {
        // Créer un identifiant unique pour cette expérience
        const uniqueId = "exp_" + Date.now();

        // Élément pour listeCompetences (avec bouton supprimer)
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = uniqueId;
        li.innerHTML = `
            ${Nomentreprise} - ${Posteoccupé} - ${Duréedébut} - ${Duréefin} - ${Nombreannée} - ${Descriptionmissions}
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerExperience('${uniqueId}')">❌</button>
        `;

        // Élément pour cvCompetences (sans bouton supprimer)
        const liCV = document.createElement("li");
        liCV.className = "list-group-item";
        liCV.dataset.id = uniqueId;
        liCV.textContent = `${Nomentreprise} - ${Posteoccupé} - ${Duréedébut} - ${Duréefin} - ${Nombreannée} - ${Descriptionmissions}`;

        // Ajouter aux listes
        const listeCompetencesElement = document.getElementById("listeCompetences");
        if (listeCompetencesElement) {
            listeCompetencesElement.appendChild(li);
        } else {
            console.error("L'élément 'listeCompetences' n'a pas été trouvé");
        }

        const cvCompetencesElement = document.getElementById("cvCompetences"); // Correction ici
        if (cvCompetencesElement) {
            cvCompetencesElement.appendChild(liCV);
        } else {
            console.error("L'élément 'cvCompetences' n'a pas été trouvé");
        }

        // Réinitialiser les champs
        document.getElementById("NomEntreprise").value = "";
        document.getElementById("PosteOccupés").value = "";
        document.getElementById("DuréeDébut").value = "";
        document.getElementById("DuréeFin").value = "";
        document.getElementById("NombreAnnée").value = "";
        document.getElementById("DescriptionMissions").value = "";
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une expérience.");
    }
    // Réinitialiser l'affichage en temps réel
    document.getElementById("nomentreprise").textContent = "";
    document.getElementById("posteoccupé").textContent = "";
    document.getElementById("duréedébut").textContent = "";
    document.getElementById("duréefin").textContent = "";
    document.getElementById("nombreannée").textContent = "";
    document.getElementById("descriptionmissions").textContent = "";
};

// Fonction pour supprimer une expérience
window.supprimerExperience = function (id) {
    // Supprimer de listeCompetences
    const itemToRemove = document.querySelector(`#listeCompetences li[data-id="${id}"]`);
    if (itemToRemove) {
        itemToRemove.remove();
    }

    // Supprimer de cvCompetences
    const itemToRemoveCV = document.querySelector(`#cvCompetences li[data-id="${id}"]`);
    if (itemToRemoveCV) {
        itemToRemoveCV.remove();
    }
};

//choix de la langue
function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false; // Désélectionne les autres
    });
    updateC(); // Met à jour le CV après chaque sélection
}

function updateC() {
    const francaisChecked = document.querySelector('input[name="francais"]:checked');
    const anglaisChecked = document.querySelector('input[name="anglais"]:checked');

    let resultat = "Français : " + (francaisChecked ? francaisChecked.value : "Aucun") + "<br>" +
                  "Anglais : " + (anglaisChecked ? anglaisChecked.value : "Aucun");

    document.getElementById("resultat").innerHTML = resultat; // Met à jour le contenu du CV
}

//Loisirs
function updateLoisirs() {
    let Loisirs = document.getElementById("Loisirs").value;
    document.getElementById("loisirs").textContent = Loisirs || "Entrer vos Loisirs";
}


window.ajouterLoisirs = function () {
    const Loisirs = document.getElementById("Loisirs").value.trim();

    if (Loisirs !== "" ) {
        // Créer un identifiant unique pour cette expérience
        const uniqueId = "exp_" + Date.now();

        // Élément pour listeCompetences (avec bouton supprimer)
        const li = document.createElement("li");
        li.className = "list-loisir-item";
        li.dataset.id = uniqueId;
        li.innerHTML = `
            ${Loisirs} 
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerloir('${uniqueId}')">❌</button>
        `;

        // Élément pour cvCompetences (sans bouton supprimer)
        const liCV = document.createElement("li");
        liCV.className = "list-loisir-item";
        liCV.dataset.id = uniqueId;
        liCV.textContent = `${Loisirs} `;

        // Ajouter aux listes
        const listeCompetencesElement = document.getElementById("list-loisir");
        if (listeCompetencesElement) {
            listeCompetencesElement.appendChild(li);
        } else {
            console.error("L'élément 'list-loisir' n'a pas été trouvé");
        }

        const cvCompetencesElement = document.getElementById("cvloisir"); // Correction ici
        if (cvCompetencesElement) {
            cvCompetencesElement.appendChild(liCV);
        } else {
            console.error("L'élément 'cvloisir' n'a pas été trouvé");
        }

        // Réinitialiser les champs
        document.getElementById("Loisirs").value = "";
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une Loisirs(.");
    }
    // Réinitialiser l'affichage en temps réel
    document.getElementById("loisirs").textContent = "";
};

window.supprimerloir = function (id) {
    // Supprimer de listeCompetences
    const itemToRemove = document.querySelector(`#list-loisir li[data-id="${id}"]`);
    if (itemToRemove) {
        itemToRemove.remove();
    }

    // Supprimer de cvCompetences
    const itemToRemoveCV = document.querySelector(`#cvloisir li[data-id="${id}"]`);
    if (itemToRemoveCV) {
        itemToRemoveCV.remove();
    }
};

// save les information du cv qui sont enregistrer dans le local storage
function Savelocalstorge(){
    let email = document.getElementById("email").value;
    let Age = document.getElementById("Age").value;
    let Adresse = document.getElementById("Adresse").value;
    let Phone = document.getElementById("Phone").value;
    let Nom = document.getElementById("name").value;
    let TitrePoste = document.getElementById("TitrePoste").value;
    let Description = document.getElementById("Description").value;
    let Loisirs = document.getElementById("Loisirs").value;
    let Compétence = document.getElementById("Compétence").value;
    let NomEtablissement = document.getElementById("NomEtablissement").value;
    let DiplômesObtenus = document.getElementById("DiplômesObtenus").value;
    let AnnéeObtention = document.getElementById("AnnéeObtention").value;
    let NomEntreprise = document.getElementById("NomEntreprise").value;
    let PosteOccupé = document.getElementById("PosteOccupés").value;
    let DuréeDébut = document.getElementById("DuréeDébut").value;
    let DuréeFin = document.getElementById("DuréeFin").value;
    let NombreAnnée = document.getElementById("NombreAnnée").value;
    
    let DescriptionMissions = document.getElementById("DescriptionMissions").value;
    

    let objets = {
        Nom: Nom,
        email:email,
        Age:Age,
        Adresse:Adresse,
        Phone:Phone,
        TitrePoste:TitrePoste,
        Description:Description,
        Loisirs:Loisirs,
        Compétence:Compétence,
        NomEtablissement:NomEtablissement,
        DiplômesObtenus:DiplômesObtenus,
        AnnéeObtention:AnnéeObtention,
        NomEntreprise:NomEntreprise,
        PosteOccupé: PosteOccupé,
        DuréeDébut: DuréeDébut,
        DuréeFin: DuréeFin,
        NombreAnnée: NombreAnnée,
        DescriptionMissions:DescriptionMissions,

    }
    let objets0=JSON.stringify(objets);

    localStorage.setItem("form", objets0);

    return objets ;
    
}
// Fonction pour restaurer les informations du CV depuis localStorage
function restoreLocalStorage() {
    // 1. Récupération des données depuis localStorage
    let donnees = localStorage.getItem("form");
    
    // Si des données existent, les convertir de JSON en objet JavaScript
    if (donnees) {
        try {
            let objets = JSON.parse(donnees);
            
            // 2. Restauration des valeurs dans les champs du formulaire
            document.getElementById("email").value = objets.email || "";
            document.getElementById("Age").value = objets.Age || "";
            document.getElementById("Adresse").value = objets.Adresse || "";
            document.getElementById("Phone").value = objets.Phone || "";
            document.getElementById("name").value = objets.Nom || "";
            document.getElementById("TitrePoste").value = objets.TitrePoste || "";
            document.getElementById("Description").value = objets.Description || "";
            document.getElementById("Loisirs").value = objets.Loisirs || "";
            document.getElementById("Compétence").value = objets.Compétence || "";
            document.getElementById("NomEtablissement").value = objets.NomEtablissement || "";
            document.getElementById("DiplômesObtenus").value = objets.DiplômesObtenus || "";
            document.getElementById("AnnéeObtention").value = objets.AnnéeObtention || "";
            document.getElementById("NomEntreprise").value = objets.NomEntreprise || "";
            document.getElementById("PosteOccupés").value = objets.PosteOccupé || "";
            document.getElementById("DuréeDébut").value = objets.DuréeDébut || "";
            document.getElementById("DuréeFin").value = objets.DuréeFin || "";
            document.getElementById("NombreAnnée").value = objets.NombreAnnée || "";
            document.getElementById("DescriptionMissions").value = objets.DescriptionMissions || "";
            
            return objets;
        } catch (e) {
            console.error("Erreur lors de la lecture des données : ", e);
            return {};
        }
    }
    
    // Si aucune donnée n'existe, retourner un objet vide
    return {};
}

// Restore les information du cv qui sont enregistrer dans le local storage
// function Restorlocalstorge() {
//     // 1. Récupération des données depuis localStorage
//     let donnees = localStorage.getItem("form");
    
//     // Si des données existent, les convertir de JSON en objet JavaScript
//     if (donnees) {
//         let objets = JSON.parse(donnees);
        
//         // 2. Restauration des valeurs dans les champs du formulaire
//         document.getElementById("email").value = objets.email || "";
//         document.getElementById("Age").value = objets.Age || "";
//         document.getElementById("Adresse").value = objets.Adresse || "";
//         document.getElementById("Phone").value = objets.Phone || "";
//         document.getElementById("name").value = objets.Nom || "";
//         document.getElementById("TitrePoste").value = objets.TitrePoste || "";
//         document.getElementById("Description").value = objets.Description || "";
//         document.getElementById("Loisirs").value = objets.Loisirs || "";
//         document.getElementById("Compétence").value = objets.Compétence || "";
//         document.getElementById("NomEtablissement").value = objets.NomEtablissement || "";
//         document.getElementById("DiplômesObtenus").value = objets.DiplômesObtenus || "";
//         document.getElementById("AnnéeObtention").value = objets.AnnéeObtention || "";
//         document.getElementById("NomEntreprise").value = objets.NomEntreprise || "";
//         document.getElementById("PosteOccupés").value = objets.PosteOccupé || "";
//         document.getElementById("DuréeDébut").value = objets.DuréeDébut || "";
//         document.getElementById("DuréeFin").value = objets.DuréeFin || "";
//         document.getElementById("NombreAnnée").value = objets.NombreAnnée || "";
//         document.getElementById("DescriptionMissions").value = objets.DescriptionMissions || "";
        
//         return objets;
//     }
    
//     // Si aucune donnée n'existe, retourner un objet vide
//     return {};
// }

// supprime les information du cv qui sont enregistrer dans le local storage
function SupprimerLocalStorage() {
    // Option 1: Supprimer uniquement les données du formulaire en utilisant la même clé
    localStorage.removeItem("form");
    alert("Données supprimées avec succès.");
    
    // Option 2: Vider tous les champs du formulaire après suppression
    document.getElementById("email").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Adresse").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("TitrePoste").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Loisirs").value = objets.Loisirs || "";
    document.getElementById("Compétence").value = objets.Compétence || "";
    document.getElementById("NomEtablissement").value = "";
    document.getElementById("DiplômesObtenus").value = "";
    document.getElementById("AnnéeObtention").value = "";
    document.getElementById("NomEntreprise").value = "";
    document.getElementById("PosteOccupés").value = "";
    document.getElementById("DuréeDébut").value = "";
    document.getElementById("DuréeFin").value = "";
    document.getElementById("NombreAnnée").value = "";
    document.getElementById("DescriptionMissions").value = "";
    
    // Option 3: Pour confirmer la suppression
    return true;
}