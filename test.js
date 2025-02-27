
//importer l'image

document.getElementById("uploadImage").addEventListener("change", function(e) {
    let file = e.target.files[0];
    if (file) {
        let preview = document.getElementById("preview");
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});


//nom complet
function updateNOM() {
    let Nom = document.getElementById("name").value;
    document.getElementById("nom").textContent = Nom || "Entrer votre Nom complet";
}

// Emails enregistrés
function validateEmail() {
    let emailInput = document.getElementById("email").value;
    let newemail= document.getElementById("EEmail").textContent = emailInput || "Entrer votre email";
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

//Description
function updateDescription() {
    let Description = document.getElementById("Description").value;
    document.getElementById("description").textContent = Description || "Entrer votre Description";
}
//téléphone
function updatePhone() {
    let Phone = document.getElementById("Phone").value;
    document.getElementById("phone").textContent = Phone || "Entrer votre numéro de téléphone";
}
//adresse
function updateAdresse() {
    let Adresse = document.getElementById("Adresse").value;
    document.getElementById("adresse").textContent = Adresse || "Entrer votre adresse";
}
// titre du poste
function updateTitrePoste() {
    let TitrePoste = document.getElementById("TitrePoste").value;
    document.getElementById("titreposte").textContent = TitrePoste || "Entrer votre Titre du Poste";
}
// situation matrimoniale
 
function toggleSexe(selected) {
    const femmeRadio = document.querySelector('input[name="femme"]');
    const hommeRadio = document.querySelector('input[name="homme"]');

    if (selected === femmeRadio) {
        hommeRadio.checked = false; // Désélectionne Homme si Femme est sélectionné
    } else if (selected === hommeRadio) {
        femmeRadio.checked = false; // Désélectionne Femme si Homme est sélectionné
    }

    // Met à jour l'affichage du sexe
    updateSexe();
}

function updateSexe() {
    const sexeChecked = document.querySelector('input[name="femme"]:checked') || document.querySelector('input[name="homme"]:checked');
    const sexeResult = sexeChecked ? sexeChecked.value : "Aucune sélection";

    document.getElementById("sexe").innerHTML = sexeResult; // Met à jour le contenu du CV
}

// Ajout d'écouteurs d'événements pour chaque bouton radio
document.querySelectorAll('input[name="femme"], input[name="homme"]').forEach((element) => {
    element.addEventListener('click', function() {
        toggleSexe(this);
    });
});

//choix de la langue
function onlyOn(checkbox) {
    let checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false; // Désélectionne les autres
    });
    updateSexe(); // Met à jour le CV après chaque sélection
}        

//age
function updateAge() {
    let Age = document.getElementById("Age").value;
    document.getElementById("age").textContent = Age || "Entrer votre Age";
}
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

//compétence
function updateCompétence() {
    let Compétence = document.getElementById("Compétence").value;
    document.getElementById("compétence").textContent = Compétence ;
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

// Fonctions de mise à jour en temps réel qui gèrent plusieurs champs

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

//FORMATION
// Fonctions de mise à jour en temps réel qui gèrent plusieurs champs
// Nom de Etablissement
function updateNomEtablissement() {
    let NomEtablissement = document.getElementById("NomEtablissement").value ;
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







function Savelocalstorge (){
    let email = document.getElementById("email").value;
    let Age = document.getElementById("Age").value;
    let Adresse = document.getElementById("Adresse").value;
    let Phone = document.getElementById("Phone").value;
    let Nom = document.getElementById("name").value;
    let TitrePoste = document.getElementById("TitrePoste").value;
    let Profil = document.getElementById("profil").value;
    let NomEtablissement = document.getElementById("NomEtablissement").value;
    let DiplômesObtenus = document.getElementById("DiplômesObtenus").value;
    let AnnéeObtention = document.getElementById("AnnéeObtention").value;
    let NomEntreprise = document.getElementById("NomEntreprise").value;
    let PosteOccupé = document.getElementById("PosteOccupé").value;
    let Durée = document.getElementById("Durée").value;
    let DescriptionMissions = document.getElementById("DescriptionMissions").value;

    let objets = {
        Nom: Nom,
        email:email,
        Age:Age,
        Adresse:Adresse,
        Phone:Phone,
        TitrePoste:TitrePoste,
        Profil:Profil,
        NomEtablissement:NomEtablissement,
        DiplômesObtenus:DiplômesObtenus,
        AnnéeObtention:AnnéeObtention,
        NomEntreprise:NomEntreprise,
        PosteOccupé: PosteOccupé,
        Durée: Durée,
        DescriptionMissions:DescriptionMissions,

    }
    let objets0=JSON.stringify(objets);

    localStorage.setItem("form", objets0);

    return objets ;
    
}


function Restorlocalstorge (){
    let emailInput = document.getElementById("email").value;
    let Age = document.getElementById("Age").value;
    let Adresse = document.getElementById("Adresse").value;
    let Phone = document.getElementById("Phone").value;
    let Nom = document.getElementById("name").value;
    let TitrePoste = document.getElementById("TitrePoste").value;
    let Profil = document.getElementById("profil").value;
    let NomEtablissement = document.getElementById("NomEtablissement").value;
    let DiplômesObtenus = document.getElementById("DiplômesObtenus").value;
    let AnnéeObtention = document.getElementById("AnnéeObtention").value;
    let NomEntreprise = document.getElementById("NomEntreprise").value;
    let PosteOccupé = document.getElementById("PosteOccupé").value;
    let Durée = document.getElementById("Durée").value;
    let DescriptionMissions = document.getElementById("DescriptionMissions").value;

    let objets = {
        Nom: Nom,
        email:email,
        Age:Age,
        Adresse:Adresse,
        Phone:Phone,
        TitrePoste:TitrePoste,
        Profil:Profil,
        NomEtablissement:NomEtablissement,
        DiplômesObtenus:DiplômesObtenus,
        AnnéeObtention:AnnéeObtention,
        NomEntreprise:NomEntreprise,
        PosteOccupé: PosteOccupé,
        Durée: Durée,
        DescriptionMissions:DescriptionMissions,

    }
    let objets0=JSON.stringify(objets);
    
    localStorage.getItem(objets0);

    return objets ;
    
}
// Nécessite la bibliothèque jsPDF et html2canvas
// Assurez-vous d'inclure ces CDN dans votre fichier HTML :
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

// Nécessite la bibliothèque jsPDF et html2canvas
// Assurez-vous d'inclure ces CDN dans votre fichier HTML :
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
// Utilisation de la bibliothèque pdfmake qui gère mieux la création de PDF
// Ajoutez ces scripts dans votre HTML :
// <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>


// Assurez-vous que jsPDF est correctement chargé
if (window.jspdf) {
    window.jsPDF = window.jspdf.jsPDF;
} else {
    console.error('jsPDF nest pas chargé correctement');
}
  
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Vérifiez si jsPDF est disponible
    if (typeof jsPDF === 'undefined') {
      console.error('jsPDF nest pas défini');
      return;
    }
  
    const doc = new jsPDF();
    
    // Ajoutez du contenu statique
    doc.text('Bonjour, voici mon CV.', 10, 10);
    
    // Capturez le contenu HTML (assurez-vous que l'élément avec l'ID 'cv-content' existe)
    const content = document.getElementById('CVBODY').innerHTML;
    
    // Utilisez la méthode html pour ajouter le contenu HTML
    doc.html(content, {
      callback: function(doc) {
        doc.save('mon_cv.pdf');
      },
      x: 15,
      y: 20, // Ajusté pour ne pas chevaucher le texte statique
      width: 170,
      windowWidth: 650
    });
});
  