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

function updateHyouji() { // 表示のアップデート用
    document.getElementById('sirokumaHyouji').innerHTML = sirokumapoint;
}

// ------------------------------------------------
// スキル用
// ------------------------------------------------

function skillX10() {
    if (sirokumapoint >= 100) {
        if (skillX10kakutoku == 0) {
            sirokumapoint = sirokumapoint - 100;
            skillX10kakutoku = 1;
            skillplus = 10;
            updateHyouji();
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が100に達していません。しろくま数を貯めてください。")
    }
}

function skillX100() {
    if (sirokumapoint >= 10000) {
        if (skillX100kakutoku == 0) {
            if (skillX10kakutoku == 1) {
                sirokumapoint = sirokumapoint - 10000;
                skillX100kakutoku = 1;
                skillplus = 100;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が10,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX1k() {
    if (sirokumapoint >= 100000) {
        if (skillX1Kkakutoku == 0) {
            if (skillX100kakutoku == 1) {
                sirokumapoint = sirokumapoint - 100000;
                skillX1Kkakutoku = 1;
                skillplus = 1000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が100,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX10k() {
    if (sirokumapoint >= 1000000) {
        if (skillX10Kkakutoku == 0) {
            if (skillX1Kkakutoku == 1) {
                sirokumapoint = sirokumapoint - 1000000;
                skillX10Kkakutoku = 1;
                skillplus = 10000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が1,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX100k() {
    if (sirokumapoint >= 10000000) {
        if (skillX100Kkakutoku == 0) {
            if (skillX10Kkakutoku == 1) {
                sirokumapoint = sirokumapoint - 10000000;
                skillX100Kkakutoku = 1;
                skillplus = 100000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が10,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX1000k() {
    if (sirokumapoint >= 100000000) {
        if (skillX1000Kkakutoku == 0) {
            if (skillX100Kkakutoku == 1) {
                sirokumapoint = sirokumapoint - 100000000;
                skillX1000Kkakutoku = 1;
                skillplus = 1000000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が100,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX10000k() {
    if (sirokumapoint >= 1000000000) {
        if (skillX10000Kkakutoku == 0) {
            if (skillX1000Kkakutoku == 1) {
                sirokumapoint = sirokumapoint - 1000000000;
                skillX10000Kkakutoku = 1;
                skillplus = 10000000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
        alert("しろくま数が1,000,000,000に達していません。しろくま数を貯めてください。")
    }
}

function skillX100000k() {
    if (sirokumapoint >= 10000000000) {
        if (skillX100000Kkakutoku == 0) {
            if (skillX10000Kkakutoku == 1) {
                sirokumapoint = sirokumapoint - 10000000000;
                skillX100000Kkakutoku = 1;
                skillplus = 100000000;
                updateHyouji();
            }
            else {
                alert("前のスキルを取ってください。")
            }
        }
        else {
            alert("すでに獲得しています！")
        }
    }
    else {
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

/*item1cost = 100; //シャープペン

item1kosuu = 0; //シャープペン

item1zouka = 0;*/

item1upgradelevel = 0;

item1upgradecost = 1500;

function item1get() {
    if (sirokumapoint >= item1cost) {
        sirokumapoint = sirokumapoint - item1cost;
        item1kosuu = item1kosuu + 1;
        item1cost = 1.08 ** item1kosuu * syokiitem1cost;
        item1cost = Math.floor(item1cost);
        item1zouka = 2 ** item1upgradelevel * item1kosuu * item1seinou;
        updateHyouji();
        itemzoukasyori();
        console.log("item1　現在の個数は" + item1kosuu + "で次の１個を買うためのコストは" + item1cost + "です。")


    }
    else {
        alert("しろくま数が" + item1cost + "に達していません。しろくま数を貯めてください。")
    }
}

function reset() {
    
}
let upgrade_open = [10, 25, 50, 100, 150, 250, 300, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]
let item_cost = [10, 100, 5000, 50000, 100000/*5*/, 5000000, 200000000, 10000000000, 500000000000, 20000000000000/*10*/, 1000000000000000, 50000000000000000, 2000000000000000000, 100000000000000000000, 10000000000000000000000]
let item_kosuu = Array(15).fill(0, 0)
let item_zouka = Array(15).fill(0, 0)
let item_seinou = [0.125, 1, 47, 450, 9000/*5*/, 420000, 1600000, 77000000, 3750000000, 14000000000000, 6700000000000, 325000000000000, 12600000000000000, 610000000000000000, 6000000000000000000000]
function item_buy(number, kosuu) {
    if (sirokumapoint >= item_cost[number - 1]) {
        item_kosuu[number - 1] += 1
        sirokumapoint -= item_cost[number - 1]
        item_cost[number - 1] = Math.floor((item_cost[number - 1] * 1.1))
        item_update(number);
        item_zouka[number - 1] = 2 ** upgrade_level[number - 1] * item_kosuu[number - 1] * item_seinou[number - 1]
        itemzoukasyori();
        updateHyouji();
        if (item_kosuu >= upgrade_open[upgrade_level[number - 1]]) {

        }
        if (item_kosuu >= upgrade_open[upgrade_level[number - 1] + 1]) {

        }
        if (item_kosuu >= upgrade_open[upgrade_level[number - 1] + 2]) {

        }
        if (item_kosuu >= upgrade_open[upgrade_level[number - 1] + 3]) {

        }
    }
}

let upgrade_cost_factor = [2.6, 10.8, 117, 13689, 1612260/*5*/, 189888400, 22292878864, 2617008292089, 307213151085009, 36064013852636176,/*10*/4219489620758433000, 493680285628736613264, 6802914335963990530777920, 93744159549583789514119737600, 1283263800074252494658785088006400,/*15*/, 17566598159216442399384109069719609600, 240469162201513880005169069055391735814400, 3291782361376523503390759386299257471563321600n, 45061208744883230237916105239050535528230309382400n, 616842886508706538726833564617362780845944705135673600n,/*20*/8443962273417683808631624666047079107000137068602235910400n, 115589399560814673656358310053518465895724876332096007377465600n] //アイテムの値段に倍率をつけて値段を決定する
let upgrade_cost_base = [] //倍率をかけるベースの値段
let upgrade_level = Array(15).fill(0, 0)

function upgrade_buy(number) {

    if (sirokumapoint >= upgrade_cost[number - 1]) {
        upgrade_level[number - 1] += 1
        sirokumapoint -= upgrade_cost_base[number - 1] * upgrade_cost_factor[upgrade_level[number - 1] + 1]
        item_zouka[number - 1] = 2 ** upgrade_level[number - 1] * item_kosuu[number - 1] * item_seinou[number - 1]
        itemzoukasyori();
    }
}
function item_update(number) {
    document.querySelectorAll(".item-syojisuu")[number - 1].innerHTML = item_kosuu[number - 1]
    document.querySelectorAll(".item-buyHyoujiNedan")[number - 1].innerHTML = `${item_cost[number - 1]}&nbsp;しろくま`
}

function item1upgrade() {
    if (sirokumapoint >= item1upgradecost) {
        sirokumapoint = sirokumapoint - item1upgradecost;
        item1upgradelevel = item1upgradelevel + 1
        item1zouka = 2 ** item1upgradelevel * item1kosuu * item1seinou;
        item1upgradecost = 2 ** item1upgradelevel * syokiitem1upgradecost;
        itemzoukasyori();
    }

    else {
        alert("しろくま数が" + item1upgradecost + "に達していません。しろくま数を貯めてください。")
    }
}


// プレループ
function itemloopPre() {
    setInterval(itemloop, 1000);
}

function itemloop() {
    sirokumapoint = sirokumapoint + itemzouka;
    updateHyouji();
}
function itemzoukasyori() {
    itemzouka = item_zouka.reduce(function (a, b) {
        return a + b;
    });
}
function hensuusyori() {//itemcostとかをセーブデータをロードしたときに処理するよう　セーブデータの圧縮のため
    item1zouka = 2 ** item1upgradelevel * item1kosuu * item1seinou
    item2zouka = 2 ** item2upgradelevel * item2kosuu * item2seinou
    item3zouka = 2 ** item3upgradelevel * item3kosuu * item3seinou
    item4zouka = 2 ** item4upgradelevel * item4kosuu * item4seinou
    item5zouka = 2 ** item5upgradelevel * item5kosuu * item5seinou
    item6zouka = 2 ** item6upgradelevel * item6kosuu * item6seinou
    item7zouka = 2 ** item7upgradelevel * item7kosuu * item7seinou
    item8zouka = 2 ** item8upgradelevel * item8kosuu * item8seinou
    item9zouka = 2 ** item9upgradelevel * item9kosuu * item9seinou
    item10zouka = 2 ** item10upgradelevel * item10kosuu * item10seinou
    item11zouka = 2 ** item11upgradelevel * item11kosuu * item11seinou
    item12zouka = 2 ** item12upgradelevel * item12kosuu * item12seinou
    item1cost = 1.08 ** item1kosuu * syokiitem1cost;
    item1cost = Math.floor(item1cost);
    item2cost = 1.08 ** item2kosuu * syokiitem2cost;
    item2cost = Math.floor(item2cost);
    item3cost = 1.08 ** item3kosuu * syokiitem3cost;
    item3cost = Math.floor(item3cost);
    item4cost = 1.08 ** item4kosuu * syokiitem4cost;
    item4cost = Math.floor(item4cost);
    item5cost = 1.08 ** item5kosuu * syokiitem5cost;
    item5cost = Math.floor(item5cost);
    item6cost = 1.08 ** item6kosuu * syokiitem6cost;
    item6cost = Math.floor(item6cost);
    item7cost = 1.08 ** item7kosuu * syokiitem7cost;
    item7cost = Math.floor(item7cost);
    item8cost = 1.08 ** item8kosuu * syokiitem8cost;
    item8cost = Math.floor(item8cost);
    item9cost = 1.08 ** item9kosuu * syokiitem9cost;
    item9cost = Math.floor(item9cost);
    item10cost = 1.08 ** item10kosuu * syokiitem10cost;
    item10cost = Math.floor(item10cost);
    item11cost = 1.08 ** item11kosuu * syokiitem11cost;
    item11cost = Math.floor(item11cost);
    item12cost = 1.08 ** item12kosuu * syokiitem12cost;
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