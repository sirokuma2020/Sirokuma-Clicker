// Cookieの読み出し
function cookiewrite(){

    localStorage.setItem('sirokumapoint', sirokumapoint);
    localStorage.setItem('skillplus', skillplus);

    localStorage.setItem('skillX10kakutoku', skillX10kakutoku);
    localStorage.setItem('skillX100kakutoku', skillX100kakutoku);
    localStorage.setItem('skillX1Kkakutoku', skillX1Kkakutoku);
    localStorage.setItem('skillX10Kkakutoku', skillX10Kkakutoku);
    localStorage.setItem('skillX100Kkakutoku', skillX100Kkakutoku);
    localStorage.setItem('skillX1000Kkakutoku', skillX1000Kkakutoku);
    localStorage.setItem('skillX10000Kkakutoku', skillX10000Kkakutoku);
    localStorage.setItem('skillX100000Kkakutoku', skillX100000Kkakutoku);




    console.log("cookie writed.")

}
function cookieload(){
    sirokumapoint = localStorage.getItem('sirokumapoint');
    skillplus = localStorage.getItem('skillplus');

    skillX10kakutoku = localStorage.getItem('skillX10kakutoku');
    skillX100kakutoku = localStorage.getItem('skillX100kakutoku');
    skillX1Kkakutoku = localStorage.getItem('skillX1Kkakutoku');
    skillX10Kkakutoku = localStorage.getItem('skillX10Kkakutoku');
    skillX100Kkakutoku = localStorage.getItem('skillX100Kkakutoku');
    skillX1000Kkakutoku = localStorage.getItem('skillX1000Kkakutoku');
    skillX10000Kkakutoku = localStorage.getItem('skillX10000Kkakutoku');
    skillX100000Kkakutoku = localStorage.getItem('skillX100000Kkakutoku');

    sirokumapoint = Number(sirokumapoint);
    skillplus = Number(skillplus);

    skillX10kakutoku = Number(skillX10kakutoku);
    skillX100kakutoku = Number(skillX100kakutoku);
    skillX1Kkakutoku = Number(skillX1Kkakutoku);
    skillX10Kkakutoku = Number(skillX10Kkakutoku);
    skillX100Kkakutoku = Number(skillX100Kkakutoku);
    skillX1000Kkakutoku = Number(skillX1000Kkakutoku);
    skillX10000Kkakutoku = Number(skillX10000Kkakutoku);
    skillX100000Kkakutoku =  Number(skillX100000Kkakutoku);
    
    if(skillX100000Kkakutoku == 1){
        skillplus = 100000000;
    }
    else if(skillX10000Kkakutoku == 1){
        skillplus = 10000000;
    }
    else if(skillX1000Kkakutoku == 1){
        skillplus = 1000000;
    }
    else if(skillX100Kkakutoku == 1){
        skillplus = 100000;
    }    
    else if(skillX10Kkakutoku == 1){
        skillplus = 10000;
    }
    else if(skillX1Kkakutoku == 1){
        skillplus = 1000;
    }
    else if(skillX100kakutoku == 1){
        skillplus = 100;
    }
    else if(skillX10kakutoku == 1){
        skillplus = 10;
    }
    else{
        skillplus = 1;
    }

    console.log(localStorage);
    updateHyouji();
    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')