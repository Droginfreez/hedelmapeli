var pelikaynnissa = false;
var panos = 0.5;
var rahaa = 50;
var maksimipanos = 10;
var minimipanos = 0.5;









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
    document.getElementById("rahaa").innerHTML = "RAHAA: " + rahaa + "â??";
}


function paivitaPanos() {
    document.getElementById("panos").innerHTML = "PANOS: " + panos + "â??";
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