var pelikaynnissa = false;
var panos = 1;
var rahaa = 100;
var maksimipanos = 10;
var minimipanos = 0.5;
var voitto = false;
var eiVoiLukita = true;
var arpalukittu1 = false;
var arpalukittu2 = false;
var arpalukittu3 = false;





function pelaa() {
    if(eiVoiLukita == true){
        lukitse1();
        lukitse2();
        lukitse3();
    }
    if (pelikaynnissa == false && rahaa >= panos) {
        eiVoiLukita = false;
        if(arpalukittu1 == true || arpalukittu2 == true || arpalukittu3 == true){
            eiVoiLukita = true;
        }
    

        rahaa -= panos;
        pelikaynnissa = true;
        if(arpalukittu1 == false){
            paivitaHedelma("hedelma1", "img/nothing.png");
            setTimeout(() => { arpa1 = arvohedelma("hedelma1"); }, 500);
        }
        
        if(arpalukittu2 == false){
            paivitaHedelma("hedelma2", "img/nothing.png");
            setTimeout(() => { arpa2 = arvohedelma("hedelma2"); }, 1000);
        }
        
        if(arpalukittu3 == false){
            paivitaHedelma("hedelma3", "img/nothing.png");
            setTimeout(() => { arpa3 = arvohedelma("hedelma3"); }, 1500); 
        }
    
      
        setTimeout(() => { pelikaynnissa = false;  paivitaKaikki();}, 2000);
        paivitaKaikki();
    }
}


function arvohedelma(id) {
    var hedelma;
    var luku = pyorita();

    if (luku == 1) {
        hedelma = paivitaHedelma(id, "img/banaani.jpg");
        return 1;
    }

    if (luku == 2) {
        hedelma = paivitaHedelma(id, "img/omppu.jpg");
        return 2;
    }

    if (luku == 3) {
        hedelma = paivitaHedelma(id, "img/mansikka.png");
        return 3;
    }

    if (luku == 4) {
        hedelma = paivitaHedelma(id, "img/kirsikka.jpg");
        return 4;
    }

    if (luku == 5) {
        hedelma = paivitaHedelma(id, "img/seiska.png");
        return 5;
    }
}

function paivitaHedelma(id, hedelma) {
    document.getElementById(id).src = hedelma;
}



function pyorita() {
    var arpa;
    randomNumero = arvo();

    if (randomNumero <= 10) {
        arpa = 1;
    }

    if (randomNumero > 10 && randomNumero <= 21) {
        arpa = 2;
    }

    if (randomNumero > 21 && randomNumero <= 31) {
        arpa = 3;
    }

    if (randomNumero > 31 && randomNumero <= 36) {
        arpa = 4;
    }

    if (randomNumero > 36) {
        arpa = 5;
    }

    return arpa;
}



function arvo() {
    return Math.random() * (38 - 1) + 1;

}


function paivitaKaikki() {
    paivitaRahat();
    paivitaPanos();
    paivitaHedelmat();
}

function paivitaBanaanit() {
    document.getElementById("banaanit-voitto").innerHTML = panos * 2 + "&euro;";
}

function paivitaOmenat() {
    document.getElementById("omenat-voitto").innerHTML = panos * 5 + "&euro;";
}

function paivitaMansikat() {
    document.getElementById("mansikat-voitto").innerHTML = panos * 10 + "&euro;";
}

function paivitaKirsikat() {
    document.getElementById("kirsikat-voitto").innerHTML = panos * 50 + "&euro;";
}

function paivitaSeiskat() {
    document.getElementById("seiskat-voitto").innerHTML = panos * 1000 + "&euro;";
}

function paivitaHedelmat() {
    paivitaSeiskat();
    paivitaKirsikat();
    paivitaMansikat();
    paivitaOmenat();
    paivitaBanaanit();
}




function paivitaRahat() {
    document.getElementById("rahaa").innerHTML = "RAHAA: " + rahaa + "&euro;";
}


function paivitaPanos() {
    document.getElementById("panos").innerHTML = "PANOS: " + panos + "&euro;";
}


function vaihdaPanos() {
    if(pelikaynnissa == false){
        if(rahaa < panos + 0.5){
            panos = minimipanos;
        }else{
          if (panos <= (maksimipanos - 0.5)) {
            panos += 0.5;
        }  
        }
       
        paivitaKaikki();
    }   
}

function vaihdaPanosPienemmaksi(){
    if(pelikaynnissa == false){
        if(panos >= minimipanos + 0.5){
            panos -= 0.5;  
        }
       
        paivitaKaikki();
    }
   
}

function toggle1(){
    if(eiVoiLukita == false){
        if(voitto == false){
            if(arpalukittu1 == false){
                arpalukittu1 = true;
                document.getElementById("lukittu-painike-1").innerHTML = "Lukittu";
                document.getElementById("lukittu-painike-1").style.backgroundColor = "#7CFC00";
            }else{
                lukitse1();
            }
        }
    }
}

function toggle2(){
    if(eiVoiLukita == false){
        if(voitto == false){
            if(arpalukittu2 == false){
                arpalukittu2 = true;
                document.getElementById("lukittu-painike-2").innerHTML = "Lukittu";
                document.getElementById("lukittu-painike-2").style.backgroundColor = "#7CFC00";
            }else{
                lukitse2();
            }
        }
    
    }
}

function toggle3(){
    if(eiVoiLukita == false){
        if(voitto == false){
            if(arpalukittu3 == false){
                arpalukittu3 = true;
                document.getElementById("lukittu-painike-3").innerHTML = "Lukittu";
                document.getElementById("lukittu-painike-3").style.backgroundColor = "#7CFC00";
            }else{
                lukitse3();
            }
        }
    }
}


function lukitse1(){
    arpalukittu1 = false;
    document.getElementById("lukittu-painike-1").innerHTML = "Ei lukittu";
    document.getElementById("lukittu-painike-1").style.backgroundColor = "gray";
}

function lukitse2(){
    arpalukittu2 = false;
    document.getElementById("lukittu-painike-2").innerHTML = "Ei lukittu";
    document.getElementById("lukittu-painike-2").style.backgroundColor = "gray";
}



function lukitse3(){
    arpalukittu3 = false;
    document.getElementById("lukittu-painike-3").innerHTML = "Ei lukittu";
    document.getElementById("lukittu-painike-3").style.backgroundColor = "gray";
}