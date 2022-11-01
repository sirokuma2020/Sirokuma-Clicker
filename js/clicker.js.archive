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
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "<br>しろくま";
    console.log("表示を更新しました！しろくま数は" + sirokumapoint + "です")
}

// ------------------------------------------------
// スキル用
// ------------------------------------------------

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

// ------------------------------------------
// アイテム
// ------------------------------------------

/*
<option value="" style="font-size: large;">アイテム</option>
<option onclick="item1get">シャープペン(コスト100)</option>
<option onclick="item2get">元素記号したじき(コスト200)</option>
<option onclick="item3get">家(コスト300)</option>
<option onclick="item4get">コンピュータLv1(コスト500)</option>
<option onclick="item5get">コンピュータLv2(コスト800)</option>
<option onclick="item6get">コンピュータLv3(コスト1000)</option>
<option onclick="item7get">釣り場(コスト1500)</option>
<option onclick="item8get">銀行(コスト2000)</option>
<option onclick="item9get">雪(コスト2300)</option>
<option onclick="item10get">クジラ(コスト2500)</option>
<option onclick="item11get">コンピュータLv4(コスト3000)</option>
<option onclick="item12get">コンピュータLv5(コスト4000)</option>
*/

item1cost = 10; //シャープペン
item2cost = 100; //したじき
item3cost = 5000; //家
item4cost = 10000; //こんぴゅーたlv1
item5cost = 50000; //lv2
item6cost = 100000;//lv3
item7cost = 500000;//釣り場
item8cost = 1000000;//銀行
item9cost = 5000000;//雪
item10cost = 10000000;//クジラ
item11cost = 50000000;//コンピュータlv4
item12cost = 100000000;//lv5

item1kosuu = 0; //シャープペン
item2kosuu = 0; //したじき
item3kosuu = 0; //家
item4kosuu = 0; //こんぴゅーたlv1
item5kosuu = 0; //lv2
item6kosuu = 0;//lv3
item7kosuu = 0;//釣り場
item8kosuu = 0;//銀行
item9kosuu = 0;//雪
item10kosuu = 0;//クジラ
item11kosuu = 0;//コンピュータlv4
item12kosuu = 0;//lv5

item1fuyasu = 0; //シャープペン
item2fuyasu = 0; //したじき
item3fuyasu = 0; //家
item4fuyasu = 0; //こんぴゅーたlv1
item5fuyasu = 0; //lv2
item6fuyasu = 0;//lv3
item7fuyasu = 0;//釣り場
item8fuyasu = 0;//銀行
item9fuyasu = 0;//雪
item10fuyasu = 0;//クジラ
item11fuyasu = 0;//コンピュータlv4
item12fuyasu = 0;//lv5

item1fueruTan = 1; //シャープペン
item2fueruTan = 1; //したじき
item3fueruTan = 1; //家
item4fueruTan = 1; //こんぴゅーたlv1
item5fueruTan = 1; //lv2
item6fueruTan = 1;//lv3
item7fueruTan = 1;//釣り場
item8fueruTan = 1;//銀行
item9fueruTan = 1;//雪
item10fueruTan = 1;//クジラ
item11fueruTan = 1;//コンピュータlv4
item12fueruTan = 1;//lv5

function item1get(){
    if(sirokumapoint >= item1cost){

        sirokumapoint = sirokumapoint - item1cost;
        item1kosuu = item1kosuu + 1;
        item1cost = item1cost * 1.35;
        item1cost = Math.floor(item1cost);

        updateHyouji();
        console.log('item1 次のコストは' + item1cost + '、個数は' + item1kosuu + 'です')
        
    }
    else{
        alert('しろくま数が' + item1cost + 'に達していません。しろくま数を貯めてください。')
    }
}

// メモ
// item*fuyasu = 実際に増やす量
// item*fueruTan = スキルで増やす時の単価的なやつ

setInterval(() => {
    item1fuyasu = item1kosuu * item1fueruTan;
    item2fuyasu = item2kosuu * item2fueruTan;
    item3fuyasu = item3kosuu * item3fueruTan;

    item4fuyasu = item4kosuu * item4fueruTan;
    item5fuyasu = item5kosuu * item5fueruTan;
    item6fuyasu = item6kosuu * item6fueruTan;

    item7fuyasu = item7kosuu * item7fueruTan;
    item8fuyasu = item8kosuu * item8fueruTan;
    item9fuyasu = item9kosuu * item9fueruTan;

    item10fuyasu = item10kosuu * item10fueruTan;
    item11fuyasu = item11kosuu * item11fueruTan;
    item12fuyasu = item12kosuu * item12fueruTan;

    fueru = item1fuyasu + item2fuyasu + item3fuyasu + item4fuyasu + item5fuyasu + item6fuyasu + item7fuyasu + item8fuyasu + item9fuyasu + item10fuyasu + item11fuyasu + item12fuyasu;

    sirokumapoint = sirokumapoint + fueru;
    updateHyouji();
}, 1000);
    

console.log('clicker.js loaded.')

/*  バックアップです 2020/11/04 15:58 by nikachu
function item1get(){
    if(sirokumapoint >= item1cost){
        sirokumapoint = sirokumapoint - item1cost;
        item1kosuu = item1kosuu + 1;
        item1cost = item1cost + item1kosuu * 1.38;
        item1cost = Math.floor(item1cost);
        updateHyouji();
        
        console.log(item1cost)
    }
    else{
        alert("しろくま数が" + item1cost + "に達していません。しろくま数を貯めてください。")
    }

}
 */