
let body = document.querySelector("body");
let divChoise = document.querySelector(".choise");



function playerChoiseFunction(){
    body.addEventListener('click', function(el) {
        if(el.target.parentElement === divChoise ){
            return el.target;
            }
        });
    }

function ordiChoiseFunction(){
    return Math.floor(Math.random() * 5) + 1;
};

let ordiChoise = ordiChoiseFunction();
let playerChoise = playerChoiseFunction();





// var vous;
// var ordi;
// function Votrechoix(v){
// vous=v;document.votrechoix.src='choix'+v+'.gif';
// Choixordi();
// }

// function Choixordi(){
// ordi=Math.round(Math.random()*2)+1;
// document.choixordi.src='choix'+ordi+'.gif';
// Pipaci();
// }

// function Pipaci(){
// if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
// {alert('BRAVO!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// else{Ordipipaci();}
// }

// function Ordipipaci(){
// if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
// {alert('PERDU!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// else{alert('AOUCH!\nA REFAIRE!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// }
