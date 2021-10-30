sirokumapoint = 0;
skillplus = 1;

skillX10kakutoku = 0;
skillX100kakutoku = 0;
skillX1Kkakutoku = 0;
skillX10Kkakutoku = 0;
skillX100Kkakutoku = 0;
skillX1000Kkakutoku = 0;
skillX10000Kkakutoku = 0;
skillX100000Kkakutoku = 0;

function pushSirokuma() { // しろくまが押されたとき
    sirokumapoint = sirokumapoint + skillplus;
    updateHyouji();
}

function updateHyouji(){ // 表示のアップデート用
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "&nbsp しろくま";
    console.log("表示を更新しました！しろくま数は" + sirokumapoint + "です")
}

function skillX10(){
    if(sirokumapoint >= 100){
        if(skillX10kakutoku == 0){
            sirokumapoint = sirokumapoint - 100;
            skillX10kakutoku = 1;
            skillplus = 10;
            updateHyouji();
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が100に達していません。しろくま数を貯めてください。")
    }
}

function skillX100(){
    if(sirokumapoint >= 10000){
        if(skillX100kakutoku == 0){
            if(skillX10kakutoku == 1){
                sirokumapoint = sirokumapoint - 10000;
                skillX100kakutoku = 1;
                skillplus = 100;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が10,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX1k(){
    if(sirokumapoint >= 100000){
        if(skillX1Kkakutoku == 0){
            if(skillX100kakutoku == 1){
                sirokumapoint = sirokumapoint - 100000;
                skillX1Kkakutoku = 1;
                skillplus = 1000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が100,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX10k(){
    if(sirokumapoint >= 1000000){
        if(skillX10Kkakutoku == 0){
            if(skillX1Kkakutoku == 1){
                sirokumapoint = sirokumapoint - 1000000;
                skillX10Kkakutoku = 1;
                skillplus = 10000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が1,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX100k(){
    if(sirokumapoint >= 10000000){
        if(skillX100Kkakutoku == 0){
            if(skillX10Kkakutoku == 1){
                sirokumapoint = sirokumapoint - 10000000;
                skillX100Kkakutoku = 1;
                skillplus = 100000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が10,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX1000k(){
    if(sirokumapoint >= 100000000){
        if(skillX1000Kkakutoku == 0){
            if(skillX100Kkakutoku == 1){
                sirokumapoint = sirokumapoint - 100000000;
                skillX1000Kkakutoku = 1;
                skillplus = 1000000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が100,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX10000k(){
    if(sirokumapoint >= 1000000000){
        if(skillX10000Kkakutoku == 0){
            if(skillX1000Kkakutoku == 1){
                sirokumapoint = sirokumapoint - 1000000000;
                skillX10000Kkakutoku = 1;
                skillplus = 10000000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が1,000,000,000に達していません。しろくま数を貯めてください。")
    }
}
function skillX100000k(){
    if(sirokumapoint >= 10000000000){
        if(skillX100000Kkakutoku == 0){
            if(skillX10000Kkakutoku == 1){
                sirokumapoint = sirokumapoint - 10000000000;
                skillX100000Kkakutoku = 1;
                skillplus = 100000000;
                updateHyouji();
            }
            else{
                alert("前のスキルを取ってください。")
            }
        }
        else{
            alert("すでに獲得しています！")
        }
    }
    else{
        alert("しろくま数が10,000,000,000に達していません。しろくま数を貯めてください。")
    }
}
