let sirokumapoint = 0n;
let skillplus = 1n;
let itemzouka = 0n;


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
let skill_level = 0n
function skill_update() {
    
}
function skill_buy() {
    if (sirokumapoint >= skill_cost[skill_level]) {
        sirokumapoint -= skill_cost[skill_level]
        skill_level += 1n
        updateHyouji();
        skillplus = 4n ** skill_level
    }
    if (skill_level == 4n) {
        skillplus == item_zouka * item_kosuu[0] / 100n
    }
}
// ------------------------------------------
// アイテム及びアップグレード
// ------------------------------------------

function reset() {
     //item_cost = [10, 100, 5000, 50000, 100000/*5*/, 5000000, 200000000, 10000000000, 500000000000, 20000000000000/*10*/, 1000000000000000, 50000000000000000, 2000000000000000000, 100000000000000000000, 10000000000000000000000]
     /*item_kosuu = Array(15).fill(0, 0)
     item_zouka = Array(15).fill(0, 0)
     itemzouka = 0
     upgrade_level = Array(15).fill(0, 0)
     for (let i = 1; i < 16; i++) {
        item_update(i)
    } */
    localStorage.clear();
    location.reload();

    
}
let upgrade_open = [10n, 25n, 50n, 100n, 150n, 250n, 300n, 450n, 500n, 600n, 700n, 800n, 900n, 1000n, 1100n, 1200n, 1300n, 1400n, 1500n]
let item_cost = [10n, 100n, 5000n, 200000n, 100000n/*5*/, 5000000n, 200000000n, 10000000000n, 500000000000n, 20000000000000n/*10n*/, 1000000000000000n, 50000000000000000n, 2000000000000000000n, 100000000000000000000n, 10000000000000000000000n]
let item_kosuu = Array(15).fill(0n, 0)
let item_zouka = Array(15).fill(0n, 0)
let item_seinou = [0n, 1n, 47n, 450n, 9000n/*5*/, 420000n, 1600000n, 77000000n, 3750000000n, 14000000000000n, 6700000000000n, 325000000000000n, 12600000000000000n, 610000000000000000n, 6000000000000000000000n]
function item_buy(number, kosuu) {
    if (sirokumapoint >= item_cost[number - 1]) {
        item_kosuu[number - 1] += 1n
        sirokumapoint -= item_cost[number - 1]
        item_cost[number - 1] = Math.floor((item_cost[number - 1] * 11n / 10n))
        item_update(number);
        item_zouka[number - 1] = 2n ** upgrade_level[number - 1] * item_kosuu[number - 1] * item_seinou[number - 1]
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

let upgrade_cost_factor = [26n, 108n, 1170n, 136890n, 16122600n/*5*/, 1898884000n, 222928788640n, 2617008292089n, 307213151085009n, 36064013852636176n,/*10*/4219489620758433000n, 493680285628736613264n, 6802914335963990530777920n, 93744159549583789514119737600n, 1283263800074252494658785088006400n,/*15*/, 17566598159216442399384109069719609600n, 240469162201513880005169069055391735814400n, 3291782361376523503390759386299257471563321600n, 45061208744883230237916105239050535528230309382400n, 616842886508706538726833564617362780845944705135673600n,/*20*/8443962273417683808631624666047079107000137068602235910400n, 115589399560814673656358310053518465895724876332096007377465600n] //アイテムの値段に倍率をつけて値段を決定する
let upgrade_cost_base = [10n, 100n, 5000n, 200000n, 100000n/*5*/, 5000000n, 200000000n, 10000000000n, 500000000000n, 20000000000000n/*10n*/, 1000000000000000n, 50000000000000000n, 2000000000000000000n, 100000000000000000000n, 10000000000000000000000n] //倍率をかけるベースの値段
let upgrade_level = Array(15).fill(0n,0)

function upgrade_buy(number) {

    if (sirokumapoint >= upgrade_cost[number - 1] * upgrade_cost_base) {
        upgrade_level[number - 1] += 1n
        sirokumapoint -= upgrade_cost_base[number - 1] * upgrade_cost_factor[upgrade_level[number - 1] + 1]
        item_zouka[number - 1] = 2n ** upgrade_level[number - 1] * item_kosuu[number - 1] * item_seinou[number - 1]
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

let item0_time = 0
function itemloop() {
    sirokumapoint = sirokumapoint + itemzouka;
    if (item0_time == 10) {
        sirokumapoint += 2n**upgrade_level[0]*item_kosuu[0]
        item0_time = 0
    }
    updateHyouji();
}
function itemzoukasyori() {
    itemzouka = item_zouka.reduce(function (a, b) {
        return a + b;
    });
}