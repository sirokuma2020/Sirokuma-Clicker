sirokumapoint = 0;
skillplus = 1;
itemzouka = 0;

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
    document.getElementById('sirokumaHyouji').innerHTML = sirokumapoint;
    console.log("表示を更新しました！ しろくま数は" + sirokumapoint + "です")
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

item1cost = 100; //シャープペン
item2cost = 500; //したじき
item3cost = 1000; //家
item4cost = 5000; //こんぴゅーたlv1
item5cost = 10000; //lv2
item6cost = 50000;//lv3
item7cost = 100000;//釣り場
item8cost = 500000;//銀行
item9cost = 1000000;//雪
item10cost = 5000000;//クジラ
item11cost = 10000000;//コンピュータlv4
item12cost = 50000000;//lv5

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

item1zouka = 0;
item2zouka = 0;
item3zouka = 0;
item4zouka = 0;
item5zouka = 0;
item6zouka = 0;
item7zouka = 0;
item8zouka = 0;
item9zouka = 0;
item10zouka = 0;
item11zouka = 0;
item12zouka = 0;

item1upgradelevel = 0;
item2upgradelevel = 0;
item3upgradelevel = 0;
item4upgradelevel = 0;
item5upgradelevel = 0;
item6upgradelevel = 0;
item7upgradelevel = 0;
item8upgradelevel = 0;
item9upgradelevel = 0;
item10upgradelevel = 0;
item11upgradelevel = 0;
item12upgradelevel = 0;

item1upgradecost = 1500;
item2upgradecost = 7500;
item3upgradecost = 15000;
item4upgradecost = 75000;
item5upgradecost = 150000;
item6upgradecost = 750000;
item7upgradecost = 1500000;
item8upgradecost = 7500000;
item9upgradecost = 15000000;
item10upgradecost = 75000000;
item11upgradecost = 150000000;
item12upgradecost = 750000000;

function item1get(){
    if(sirokumapoint >= item1cost){
        sirokumapoint = sirokumapoint - item1cost;
        item1kosuu = item1kosuu + 1;
        item1cost = 1.08**item1kosuu*syokiitem1cost;
        item1cost = Math.floor(item1cost);
        item1zouka =  2**item1upgradelevel*item1kosuu*item1seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item1　現在の個数は" + item1kosuu + "で次の１個を買うためのコストは" + item1cost + "です。")
        
       
    }
    else{
        alert("しろくま数が" + item1cost + "に達していません。しろくま数を貯めてください。")
    }
}

function item2get(){
    if(sirokumapoint >= item2cost){
        sirokumapoint = sirokumapoint - item2cost;
        item2kosuu = item2kosuu + 1;
        item2cost = 1.08**item2kosuu*syokiitem2cost;;
        item2cost = Math.floor(item2cost);
        item2zouka =  2**item2upgradelevel*item2kosuu*item2seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item2　現在の個数は" + item2kosuu + "で次の１個を買うためのコストは" + item2cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item2cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item3get(){
    if(sirokumapoint >= item3cost){
        sirokumapoint = sirokumapoint - item3cost;
        item3kosuu = item3kosuu + 1;
        item3cost = 1.08**item3kosuu*syokiitem3cost;;
        item3cost = Math.floor(item3cost);
        item3zouka =  2**item3upgradelevel*item3kosuu*item3seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item2　現在の個数は" + item3kosuu + "で次の１個を買うためのコストは" + item3cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item3cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item4get(){
    if(sirokumapoint >= item4cost){
        sirokumapoint = sirokumapoint - item4cost;
        item4kosuu = item4kosuu + 1;
        item4cost = 1.08**item4kosuu*syokiitem4cost;;
        item4cost = Math.floor(item4cost);
        item4zouka =  2**item4upgradelevel*item4kosuu*item4seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item2　現在の個数は" + item4kosuu + "で次の１個を買うためのコストは" + item4cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item4cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item5get(){
    if(sirokumapoint >= item5cost){
        sirokumapoint = sirokumapoint - item5cost;
        item5kosuu = item5kosuu + 1;
        item5cost = 1.08**item5kosuu*syokiitem5cost;;
        item5cost = Math.floor(item5cost);
        item5zouka =  2**item5upgradelevel*item5kosuu*item5seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item2　現在の個数は" + item5kosuu + "で次の１個を買うためのコストは" + item5cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item5cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item6get(){
    if(sirokumapoint >= item6cost){
        sirokumapoint = sirokumapoint - item6cost;
        item6kosuu = item6kosuu + 1;
        item6cost = 1.08**item6kosuu*syokiitem6cost;;
        item6cost = Math.floor(item6cost);
        item6zouka =  2**item6upgradelevel*item6kosuu*item6seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item2　現在の個数は" + item6kosuu + "で次の１個を買うためのコストは" + item6cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item6cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item7get(){
    if(sirokumapoint >= item7cost){
        sirokumapoint = sirokumapoint - item7cost;
        item7kosuu = item7kosuu + 1;
        item7cost = 1.08**item7kosuu*syokiitem7cost;;
        item7cost = Math.floor(item7cost);
        item7zouka =  2**item7upgradelevel*item7kosuu*item7seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item7　現在の個数は" + item7kosuu + "で次の１個を買うためのコストは" + item7cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item7cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item8get(){
    if(sirokumapoint >= item8cost){
        sirokumapoint = sirokumapoint - item8cost;
        item8kosuu = item8kosuu + 1;
        item8cost = 1.08**item8kosuu*syokiitem8cost;;
        item8cost = Math.floor(item8cost);
        item8zouka =  2**item8upgradelevel*item8kosuu*item8seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item8　現在の個数は" + item8kosuu + "で次の１個を買うためのコストは" + item8cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item8cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item9get(){
    if(sirokumapoint >= item9cost){
        sirokumapoint = sirokumapoint - item9cost;
        item9kosuu = item9kosuu + 1;
        item9cost = 1.08**item9kosuu*syokiitem9cost;;
        item9cost = Math.floor(item9cost);
        item9zouka =  2**item9upgradelevel*item9kosuu*item9seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item9　現在の個数は" + item9kosuu + "で次の１個を買うためのコストは" + item9cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item9cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item10get(){
    if(sirokumapoint >= item10cost){
        sirokumapoint = sirokumapoint - item10cost;
        item10osuu = item10kosuu + 1;
        item10cost = 1.08**item10kosuu*syokiitem10cost;;
        item10cost = Math.floor(item10cost);
        item10zouka =  2**item2upgradelevel*item10kosuu*item10seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item10　現在の個数は" + item10kosuu + "で次の１個を買うためのコストは" + item10cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item10cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item11get(){
    if(sirokumapoint >= item11cost){
        sirokumapoint = sirokumapoint - item11cost;
        item11kosuu = item11kosuu + 1;
        item11cost = 1.08**item11kosuu*syokiitem11cost;;
        item11cost = Math.floor(item11cost);
        item11zouka =  2**item11upgradelevel*item11kosuu*item11seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item11　現在の個数は" + item11kosuu + "で次の１個を買うためのコストは" + item11cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item11cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item12get(){
    if(sirokumapoint >= item12cost){
        sirokumapoint = sirokumapoint - item12cost;
        item12kosuu = item12kosuu + 1;
        item12cost = 1.08**item12kosuu*syokiitem12cost;;
        item12cost = Math.floor(item12cost);
        item12zouka =  2**item12upgradelevel*item12kosuu*item12seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item12　現在の個数は" + item12kosuu + "で次の１個を買うためのコストは" + item12cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item12cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item13get(){
    if(sirokumapoint >= item13cost){
        sirokumapoint = sirokumapoint - item13cost;
        item13kosuu = item13kosuu + 1;
        item13cost = 1.08**item13kosuu*syokiitem13cost;;
        item13cost = Math.floor(item13cost);
        item13zouka =  2**item13upgradelevel*item13kosuu*item13seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item13　現在の個数は" + item13kosuu + "で次の１個を買うためのコストは" + item13cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item13cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item14get(){
    if(sirokumapoint >= item14cost){
        sirokumapoint = sirokumapoint - item14cost;
        item14kosuu = item14kosuu + 1;
        item14cost = 1.08**item14kosuu*syokiitem14cost;;
        item14cost = Math.floor(item14cost);
        item14zouka =  2**item14upgradelevel*item14kosuu*item14seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item14　現在の個数は" + item14kosuu + "で次の１個を買うためのコストは" + item14cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item14cost + "に達していません。しろくま数を貯めてください。")
    }
}
function item15get(){
    if(sirokumapoint >= item15cost){
        sirokumapoint = sirokumapoint - item15cost;
        item15kosuu = item15kosuu + 1;
        item15cost = 1.08**item15kosuu*syokiitem15cost;;
        item15cost = Math.floor(item15cost);
        item15zouka =  2**item15upgradelevel*item15kosuu*item15seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item15　現在の個数は" + item15kosuu + "で次の１個を買うためのコストは" + item15cost + "です。")
        
     
    }
    else{
        alert("しろくま数が" + item15cost + "に達していません。しろくま数を貯めてください。")
    }
}


function item1upgrade(){
    if(sirokumapoint >= item1upgradecost){ 
            sirokumapoint = sirokumapoint - item1upgradecost;
            item1upgradelevel = item1upgradelevel + 1
            item1zouka =  2**item1upgradelevel*item1kosuu*item1seinou;
            item1upgradecost = 2**item1upgradelevel*syokiitem1upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item1upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item2upgrade(){
    if(sirokumapoint >= item2upgradecost){ 
            sirokumapoint = sirokumapoint - item2upgradecost;
            item2upgradelevel = item2upgradelevel + 1
            item2zouka =  2**item2upgradelevel*item2kosuu*item2seinou;
            item2upgradecost = 2**item2upgradelevel*syokiitem2upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item2upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item3upgrade(){
    if(sirokumapoint >= item3upgradecost){ 
            sirokumapoint = sirokumapoint - item3upgradecost;
            item3upgradelevel = item3upgradelevel + 1
            item3zouka =  2**item3upgradelevel*item3kosuu*item3seinou;
            item3upgradecost = 2**item3upgradelevel*syokiitem3upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item3upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item4upgrade(){
    if(sirokumapoint >= item4upgradecost){ 
            sirokumapoint = sirokumapoint - item4upgradecost;
            item4upgradelevel = item4upgradelevel + 1
            item4zouka =  2**item4upgradelevel*item4kosuu*item4seinou;
            item4upgradecost = 2**item4upgradelevel*syokiitem4upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item4upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item5upgrade(){
    if(sirokumapoint >= item5upgradecost){ 
            sirokumapoint = sirokumapoint - item5upgradecost;
            item5upgradelevel = item5upgradelevel + 1
            item5zouka =  2**item5upgradelevel*item4kosuu*item5seinou;
            item5upgradecost = 2**item5upgradelevel*syokiitem5upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item5upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item6upgrade(){
    if(sirokumapoint >= item6upgradecost){ 
            sirokumapoint = sirokumapoint - item6upgradecost;
            item6upgradelevel = item6upgradelevel + 1
            item6zouka =  2**item6upgradelevel*item6kosuu*item6seinou;
            item6upgradecost = 2**item6upgradelevel*syokiitem6upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item6upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item2upgrade(){
    if(sirokumapoint >= item6upgradecost){ 
            sirokumapoint = sirokumapoint - item6upgradecost;
            item6upgradelevel = item6upgradelevel + 1
            item6zouka =  2**item6upgradelevel*item6kosuu*item6seinou;
            item6upgradecost = 2**item6upgradelevel*syokiitem6upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item6upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item7upgrade(){
    if(sirokumapoint >= item7upgradecost){ 
            sirokumapoint = sirokumapoint - item7upgradecost;
            item7upgradelevel = item7upgradelevel + 1
            item7zouka =  2**item7upgradelevel*item7kosuu*item7seinou;
            item7upgradecost = 2**item7upgradelevel*syokiitem7upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item7upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item8upgrade(){
    if(sirokumapoint >= item8upgradecost){ 
            sirokumapoint = sirokumapoint - item8upgradecost;
            item8upgradelevel = item8upgradelevel + 1
            item8zouka =  2**item8upgradelevel*item8kosuu*item8seinou;
            item8upgradecost = 2**item8upgradelevel*syokiitem8upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item8upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item9upgrade(){
    if(sirokumapoint >= item9upgradecost){ 
            sirokumapoint = sirokumapoint - item9upgradecost;
            item9upgradelevel = item9upgradelevel + 1
            item9zouka =  2**item9upgradelevel*item9kosuu*item9seinou;
            item9upgradecost = 2**item9upgradelevel*syokiitem9upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item9upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item10upgrade(){
    if(sirokumapoint >= item10upgradecost){ 
            sirokumapoint = sirokumapoint - item10upgradecost;
            item10upgradelevel = item2upgradelevel + 1
            item10zouka =  2**item2upgradelevel*item1kosuu*item1seinou;
            item10upgradecost = 2**item2upgradelevel*syokiitem2upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item2upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item2upgrade(){
    if(sirokumapoint >= item2upgradecost){ 
            sirokumapoint = sirokumapoint - item2upgradecost;
            item2upgradelevel = item2upgradelevel + 1
            item1zouka =  2**item2upgradelevel*item1kosuu*item1seinou;
            item2upgradecost = 2**item2upgradelevel*syokiitem2upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item2upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}
function item2upgrade(){
    if(sirokumapoint >= item2upgradecost){ 
            sirokumapoint = sirokumapoint - item2upgradecost;
            item2upgradelevel = item2upgradelevel + 1
            item1zouka =  2**item2upgradelevel*item1kosuu*item1seinou;
            item2upgradecost = 2**item2upgradelevel*syokiitem2upgradecost;
            itemzoukasyori();
        }
      
     else{
        alert("しろくま数が" + item2upgradecost+ "に達していません。しろくま数を貯めてください。")
    }
}

// プレループ
function itemloopPre(){
    setInterval(itemloop, 1000);
}

function itemloop(){
    sirokumapoint = sirokumapoint + itemzouka;
    updateHyouji();
}
function itemzoukasyori(){
itemzouka = item1zouka + item2zouka + item3zouka + item4zouka + item5zouka + item6zouka + item7zouka + item8zouka + item9zouka + item9zouka +item10zouka + item11zouka + item12zouka
}
function hensuusyori(){//itemcostとかをセーブデータをロードしたときに処理するよう　セーブデータの圧縮のため
  item1zouka = 2**item1upgradelevel*item1kosuu*item1seinou
  item2zouka = 2**item2upgradelevel*item2kosuu*item2seinou
  item3zouka = 2**item3upgradelevel*item3kosuu*item3seinou
  item4zouka = 2**item4upgradelevel*item4kosuu*item4seinou
  item5zouka = 2**item5upgradelevel*item5kosuu*item5seinou
  item6zouka = 2**item6upgradelevel*item6kosuu*item6seinou
  item7zouka = 2**item7upgradelevel*item7kosuu*item7seinou
  item8zouka = 2**item8upgradelevel*item8kosuu*item8seinou
  item9zouka = 2**item9upgradelevel*item9kosuu*item9seinou
  item10zouka = 2**item10upgradelevel*item10kosuu*item10seinou
  item11zouka = 2**item11upgradelevel*item11kosuu*item11seinou
  item12zouka = 2**item12upgradelevel*item12kosuu*item12seinou
  item1cost = 1.08**item1kosuu*syokiitem1cost;
  item1cost = Math.floor(item1cost);
  item2cost = 1.08**item2kosuu*syokiitem2cost;
  item2cost = Math.floor(item2cost);
  item3cost = 1.08**item3kosuu*syokiitem3cost;
  item3cost = Math.floor(item3cost);
  item4cost = 1.08**item4kosuu*syokiitem4cost;
  item4cost = Math.floor(item4cost);
  item5cost = 1.08**item5kosuu*syokiitem5cost;
  item5cost = Math.floor(item5cost);
  item6cost = 1.08**item6kosuu*syokiitem6cost;
  item6cost = Math.floor(item6cost);
  item7cost = 1.08**item7kosuu*syokiitem7cost;
  item7cost = Math.floor(item7cost);
  item8cost = 1.08**item8kosuu*syokiitem8cost;
  item8cost = Math.floor(item8cost);
  item9cost = 1.08**item9kosuu*syokiitem9cost;
  item9cost = Math.floor(item9cost);
  item10cost = 1.08**item10kosuu*syokiitem10cost;
  item10cost = Math.floor(item10cost);
  item11cost = 1.08**item11kosuu*syokiitem11cost;
  item11cost = Math.floor(item11cost);
  item12cost = 1.08**item12kosuu*syokiitem12cost;
  item12cost = Math.floor(item12cost);

}
//バランス調整するときはこれをかえるとアイテムの初期の値段を変えれる itemcostをこの役割で使うと初期の値段変えると値段がおかしくなるからやめて
syokiitem1cost = 100;
syokiitem2cost = 500;
syokiitem3cost = 1000;
syokiitem4cost = 5000;
syokiitem5cost = 10000;
syokiitem6cost = 50000;
syokiitem7cost = 100000;
syokiitem8cost = 500000;
syokiitem9cost = 1000000;
syokiitem10cost = 5000000;
syokiitem11cost = 10000000;
syokiitem12cost = 50000000;
//バランス調整するときはこれをかえるとアイテムの1つ当たりの性能を変えられる
item1seinou = 1;
item2seinou = 7;
item3seinou = 20;
item4seinou = 110;
item5seinou = 230;
item6seinou = 1250;
item7seinou = 2500;
item8seinou = 12500;
item9seinou = 25000;
item10seinou = 125000;
item11seinou = 250000;
item12seinou = 1250000;
//バランス調整するときはこれをかえるとアップグレードの初期の値段を変えれるupgradecostをこの役割で使うと初期の値段変えると値段がおかしくなるからやめて
syokiitem1upgradecost = 1500;
syokiitem2upgradecost = 7500;
syokiitem3upgradecost = 15000;
syokiitem4upgradecost = 75000;
syokiitem5upgradecost = 150000;
syokiitem6upgradecost = 750000;
syokiitem7upgradecost = 1500000;
syokiitem8upgradecost = 7500000;
syokiitem9upgradecost = 15000000;
syokiitem10upgradecost = 75000000;
syokiitem11upgradecost = 150000000;
syokiitem12upgradecost = 750000000;





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