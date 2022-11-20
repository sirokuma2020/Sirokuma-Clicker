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
let skill_cost = []
let skill_level = 0
function skill_update() {
    
}
function skill_buy() {
    if (sirokumapoint >= skill_cost[skill_level]) {
        sirokumapoint -= skill_cost[skill_level]
        skill_level += 1
        updateHyouji();
        skillplus = 4 ** skill_level
    }
    if (skill_level == 4) {
        skillplus == item_zouka * item_kosuu[0] / 100
    }
}
// ------------------------------------------
// アイテム及びアップグレード
// ------------------------------------------

function reset() {
     item_cost = [10, 100, 5000, 50000, 100000/*5*/, 5000000, 200000000, 10000000000, 500000000000, 20000000000000/*10*/, 1000000000000000, 50000000000000000, 2000000000000000000, 100000000000000000000, 10000000000000000000000]
     item_kosuu = Array(15).fill(0, 0)
     item_zouka = Array(15).fill(0, 0)
     itemzouka = 0
     upgrade_level = Array(15).fill(0, 0)
     for (let i = 1; i < 16; i++) {
        item_update(i)
        
     }
     updateHyouji();

    
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
        if (number - 1== 0) {
            
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