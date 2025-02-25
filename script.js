


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
//age
function updateAge() {
    let Age = document.getElementById("Age").value;
    document.getElementById("age").textContent = Age || "Entrer votre Age";
}
//compétence
function updateCompétence() {
    let Compétence = document.getElementById("Compétence").value;
    document.getElementById("compétence").textContent = Compétence || "Entrer vos compétence";
}
//choix de la langue
function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName("hobbies");
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false; // Désélectionne les autres
    });
}
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
//FORMATION


function addNewFormation() {
    const form = document.getElementById("format");
    const original = document.querySelector(".format1"); // Sélectionne le premier bloc

    if (!original) return; // Vérifie s'il existe au moins un bloc

    const newContent = document.createElement("div");
    newContent.className = "format1"; // Assigner la classe correcte

    // Copier les valeurs avant duplication
    let originalInputs = original.querySelectorAll("input");
    let values = [];
    
    originalInputs.forEach(input => {
        values.push(input.value); // Stocker chaque valeur
    });

    newContent.innerHTML = `
        
            <div class=" mx-5 p-3    format">
    
                    <label class="fond-bold  block " for="NomEtablissement">Nom Etablissement</label>
                    <input type="text" id="NomEtablissement" name="NomEtablissement[]" class="w-full px-6  mb-2 border-b focus:outline-none bg-[#D9D9D9]" placeholder=" Nom Etablissement" oninput="updateNomEtablissement()">
                        
                    <label class="fond-bold  block " for="DiplômesObtenus">Diplômes obtenus</label>
                    <input type="text" id="DiplômesObtenus" name="DiplômesObtenus[]" class="w-full px-6 mb-2  border-b focus:outline-none bg-[#D9D9D9]" placeholder="Diplômes obtenus" oninput="updateDiplômesObtenus()">
                       
                    <label class="fond-bold  block " for="AnnéeObtention">année d’obtention</label>
                    <input type="date" id="AnnéeObtention" name="AnnéeObtention[]" class="w-full px-6   border-b focus:outline-none bg-[#D9D9D9]" placeholder="AnnéeObtention" oninput="updateAnnéeObtention()">
                        
            </div>
            <div class="bouttn">
                <button type="button" id="del_form"  class="w-31 h-8  mb-5 mt-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700">
                    <i class="fa-solid fa-trash pr-2"></i> Supprimer
                </button>  
            </div>
      
    `;

    form.appendChild(newContent); // Ajoute la nouvelle section

    // Appliquer les valeurs copiées aux nouveaux champs
    let newInputs = newContent.querySelectorAll("input");

    newInputs.forEach((input, index) => {
        input.value = values[index] || ""; // Réinjecter les valeurs
    });
}

// Ajouter un événement sur le bouton "Ajouter une formation"
document.getElementById("BBoutton").addEventListener("click", addNewFormation);

// Suppression d'une section lorsqu'on clique sur "Supprimer"
document.getElementById("format").addEventListener("click", function (e) {
    if (e.target.classList.contains("del_form")) {
        e.target.closest(".format1").remove();
    }
});

// expérience professionnel

function addNewExperience() {
    const form = document.getElementById("format0");
    const original = document.querySelector(".format2"); // Sélectionne le premier bloc

    if (!original) return; // Vérifie s'il existe au moins un bloc

    const newContent = document.createElement("div");
    newContent.className = "format2"; // Assigner la classe correcte

    // Copier les valeurs avant duplication
    let originalInputs = original.querySelectorAll("input");
    let values = [];
    
    originalInputs.forEach(input => {
        values.push(input.value); // Stocker chaque valeur
    });

    newContent.innerHTML = `

                <div class="mx-5 p-3   format0">
    
                        <label class="block fond-bold" for="NomEntreprise">Nom de Entreprise</label>
                        <input type="text" id="NomEntreprise" name="NomEntreprise[]" class="w-full px-6  mb-2 border-b focus:outline-none bg-[#D9D9D9]" placeholder=" Nom Etablissement" oninput="updateNomEntreprise()">
                        
                        <label class="block fond-bold" for="PosteOccupé">Poste Occupé</label>
                        <input type="text" id="PosteOccupé" name="PosteOccupé[]" class="w-full px-6  mb-2 border-b focus:outline-none bg-[#D9D9D9]" placeholder="Diplômes obtenus" oninput="updatePosteOccupé()">
                       
                        <label class="block fond-bold" for="Durée">Durée</label>
                        <input type="date" id="Durée" name="Durée[]" class="w-full px-6  mb-2 border-b focus:outline-none bg-[#D9D9D9]" placeholder="AnnéeObtention" oninput="updateDurée()">
                        
                        <label class="block fond-bold" for="DescriptionMissions">Description des Missions</label>
                        <input type="text" id="DescriptionMissions" name="DescriptionMissions[]" class="w-full px-6  mb-2 border-b focus:outline-none bg-[#D9D9D9]" placeholder="Diplômes obtenus" oninput="updateDescriptionMissions()">
                       
                </div>
                <div class="bouttn">
                    <button type="button" id="dels_form" class="w-31 h-8  mb-5 mt-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700">
                        <i class="fa-solid fa-trash pr-2"></i> Supprimer
                    </button>  
                </div>
      
    `;

    form.appendChild(newContent); // Ajoute la nouvelle section

    // Appliquer les valeurs copiées aux nouveaux champs
    let newInputs = newContent.querySelectorAll("input");

    newInputs.forEach((input, index) => {
        input.value = values[index] || ""; // Réinjecter les valeurs
    });
}

// Ajouter un événement sur le bouton "Ajouter une formation"
document.getElementById("BBoutton1").addEventListener("click", addNewExperience);

// Suppression d'une section lorsqu'on clique sur "Supprimer"
document.getElementById("format0").addEventListener("click", function (e) {
    if (e.target.classList.contains("dels_form")) {
        e.target.closest(".format2").remove();
    }
});




function Savelocalstorge (){
    let emailInput = document.getElementById("email").value;
    let Nom = document.getElementById("name").value;
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
    let Nom = document.getElementById("name").value;
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

