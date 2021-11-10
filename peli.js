var pelikaynnissa = false;
var panos = 1;
var rahaa = 100;
var maksimipanos = 10;
var minimipanos = 0.5;





function paivitaKaikki() {
    paivitaRahat();
    paivitaPanos();
    paivitaHedelmat();
}

function paivitaMansikat() {
    document.getElementById("mansikat-voitto").innerHTML = panos * 2;
}

function paivitaOmenat() {
    document.getElementById("omenat-voitto").innerHTML = panos * 5;
}

function paivitaKirsikat() {
    document.getElementById("kirsikat-voitto").innerHTML = panos * 10;
}

function paivitaBanaanit() {
    document.getElementById("banaanit-voitto").innerHTML = panos * 50;
}

function paivitaSeiskat() {
    document.getElementById("seiskat-voitto").innerHTML = panos * 1000;
}

function paivitaHedelmat() {
    paivitaSeiskat();
    paivitaBanaanit();
    paivitaKirsikat(),
    paivitaOmenat();
    paivitaMansikat();
}




function paivitaRahat() {
    document.getElementById("rahaa").innerHTML = "RAHAA: " + rahaa;
}


function paivitaPanos() {
    document.getElementById("panos").innerHTML = "PANOS: " + panos;
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
