


let Registrieren_oder_Anmelden = 1;

let ZahlenListe = [ ];

let number = 1;
let number_switch = 1;

let body = document.getElementById("body")
let Benutzername = document.getElementById("Benutzername");
let Benutzerpasswort = document.getElementById("Benutzerpasswort");
//let BenutzerEmail = document.getElementById("BenutzerEmail");



ausgeben = JSON.parse(localStorage.getItem("Passwort_Liste"));
ausgeben2 = JSON.parse(localStorage.getItem("Registrier_Liste"))



let Passwort_Liste = JSON.parse(localStorage.getItem("Passwort_Liste")) || [ ];
let Registrier_Liste = JSON.parse(localStorage.getItem("Registrier_Liste")) || [ ];

console.log(Passwort_Liste)
console.log(Registrier_Liste)


function Switch() {
    let rectaround = document.getElementById("rectaround");
    let headline = document.getElementById("headline");
    let Benutzerpasswort = document.getElementById("Benutzerpasswort")
    let Benutzername = document.getElementById("Benutzername");
    let Registrieren = document.getElementById("Registrieren");
    let login = document.getElementById("login");
    let button_eye = document.getElementById("button_eye")
    let Hinweis = document.getElementById("Hinweis");
    let Hinweis1 = document.getElementById("Hinweis1");


    if (rectaround.style.transform === "rotateY(180deg)"){

        number_switch = 1;
        rectaround.style.transition = "transform 1s ease";
        rectaround.style.transform = "rotateY(0deg)"; 
        headline.style.transform = "rotateY(0deg)";
        headline.style.transition = "transform 1s ease";
        Benutzername.style.transform = "rotateY(0deg)";
        Benutzername.style.transition = "transform 1s ease";
        Benutzerpasswort.style.transform = "rotateY(0deg)";
        Benutzerpasswort.style.transition = "transform 1s ease";
        Hinweis.style.transform = "rotateY(0deg)";
        Hinweis.style.transition = "transform 1s ease";

        Hinweis1.style.transform = "rotateY(0deg)";
        Hinweis1.style.transition = "transform 1s ease";


        Registrieren.style.transform = "rotateY(0deg)";
        login.style.transform = "rotateY(0deg)";
        login.innerText = "Anmelden"
        button_eye.style.right = 10 + "px";
        Registrieren.style.right = 10 + "px";


        

        Benutzername.value = "";
        Benutzerpasswort.value = "";
        Registrieren.innerText = "zum Registrieren"
        headline.innerText = "Anmelden";


        body.style.background = "linear-gradient(to bottom right, rgb(20, 57, 98), rgb(27, 78, 136) 70%)";
        body.style.transition = "2s";
        rectaround.style.backgroundColor = " rgb(20, 56, 98)";


        
        Registrieren_oder_Anmelden = 1;


    }
    else {

        number_switch  = 2;

        rectaround.style.transition = "transform 1s ease";
        rectaround.style.transform = "rotateY(180deg)"; 
        headline.style.transform = "rotateY(180deg)";
        headline.style.transition = "transform 1s ease";
        headline.innerText = "Registrieren";
        Benutzername.style.transform = "rotateY(180deg)";
        Benutzername.style.transition = "transform 1s ease";
        Benutzerpasswort.style.transform = "rotateY(180deg)";
        Benutzerpasswort.style.transition = "transform 1s ease";
        Registrieren.style.transform = "rotateY(180deg)";
        Hinweis.style.transition = "transform 1s ease";
        Hinweis.style.transform = "rotateY(180deg)";
        Hinweis1.style.transition = "transform 1s ease";
        Hinweis1.style.transform = "rotateY(180deg)";



        login.style.transform = "rotateY(180deg)";
        login.innerText = "Registrieren";
        button_eye.style.right = 660 + "px";

        Registrieren.style.right = 540 + "px";
        Hinweis.style.marginRight = 90 + "px";
        Hinweis1.style.marginRight = 90 + "px";



        body.style.background = "linear-gradient(to bottom right,  rgb(17, 65, 23) , rgb(48, 75, 26) 70%";
        body.style.transition = "2s";
        rectaround.style.backgroundColor = "rgba(53, 82, 30, 0.5)";



        Registrieren.innerText = "zum Ammelden";
        Benutzername.value = "";
        Benutzerpasswort.value = "";
        

        Registrieren_oder_Anmelden = 2;

        
        Hinweis.innerText = " ";
        Hinweis1.innerText = " ";


    }
}

    

function eye_top(){
    let eye = document.getElementById("eye");
    let Benutzerpasswort = document.getElementById("Benutzerpasswort");
    if (number == 1){
            eye.src = "Fotos/eye close.png";
        number += 1;
        Benutzerpasswort.type = "text";
        
    }
    else if (number == 2){
        Benutzerpasswort.type = "password";
        number = 1;
        eye.src = "Fotos/eye see.png";
    }
}

document.getElementById("Benutzerpasswort").addEventListener("keydown", (event) => {
    if (event.key == "Enter"){

        log_in()
        event.key = " ";
    }
});

function log_in() {

    let Benutzername_wert = Benutzername.value;
    Benutzername_wert = Benutzername_wert.trimEnd();

    let Benutzerpasswort_wert = Benutzerpasswort.value;
    Benutzerpasswort_wert = Benutzerpasswort_wert.trimEnd()

    let nutzerDaten = {
        benutzername: Benutzername_wert,
        passwort: Benutzerpasswort_wert
};


    if (number_switch == 2){
        if(Registrier_Liste.includes(Benutzername_wert) && Passwort_Liste.includes(Benutzerpasswort_wert)){
            Hinweis.innerText = "Benutzername ist bereits vergeben";
            Hinweis1.innerText = "Benutzername ist bereits vergeben";
        
        }
        else{
            


            Passwort_Liste.push(Benutzerpasswort_wert)
            Registrier_Liste.push(Benutzername_wert)
            console.log("Das sind die Benutzer Daten: " + nutzerDaten)

            Hinweis.innerText = " "
            Hinweis1.innerText = " "

            localStorage.setItem("aktuellerNutzer", JSON.stringify(nutzerDaten))
            localStorage.setItem("Passwort_Liste", JSON.stringify(Passwort_Liste))
            localStorage.setItem("Registrier_Liste", JSON.stringify(Registrier_Liste))


        
            window.location.href = "../Startseite/index.html";

        }
    }
    else{

        Benutzername.style.borderColor = "red";
        Benutzername.style.border = 10 + "px";
        let abgesteichertePasswörter =  JSON.parse(localStorage.getItem("Passwort_Liste"));
        let abgesteicherteBenutzernamen = JSON.parse(localStorage.getItem("Registrier_Liste"))


            console.log("Bis hier bin ich")
            if (abgesteicherteBenutzernamen.includes(Benutzername_wert) && abgesteichertePasswörter.includes(Benutzerpasswort_wert)){

                localStorage.setItem("aktuellerNutzer", JSON.stringify(nutzerDaten))                
                window.location.href = "../Startseite/index.html";
                console.log("Alle hat geklapptx☃︎")
                
                 
                
                Hinweis.innerText = " "
                Hinweis1.innerText = " "

               /* localStorage.setItem("aktuellerNutzer", JSON.stringify(nutzerDaten));
                console.log("Das ist der aktuelle Nutzer: " +  aktuellerNutzer.benutzername)
                    */
                
                



            }
              
        
        else{
            Hinweis.innerText = "Ungültiger Benutzername oder Passwort."
            Hinweis1.innerText = "Ungültiger Benutzername oder Passwort."
    
        }
    }

    // Hier könntest du weitere Logik hinzufügen, um den Login zu prüfen oder mit einem Server zu kommunizieren
}


function alleslöschen(){
    localStorage.removeItem("Passwort_Liste");
    localStorage.removeItem("Registrier_Liste");
    Hinweis.innerText = "Die Liste wurde entlert!!!";
    Hinweis1.innerText = "Alle müssen sich jetzt neu Registrieren";

    setTimeout(() => { 
        Hinweis.innerText = " ";
        Hinweis1.innerText = " ";
        Switch()
        
    }, 2000)
    


}
