let last_online = 0;
// Cookieの読み出し
function cookiewrite(){
    console.log(item_cost)
    localStorage.setItem('sirokumapoint', sirokumapoint);
    localStorage.setItem('skillplus', skillplus);
    localStorage.setItem('last_online', BigInt(Math.floor(new Date().getTime() / 1000n)))
    item_kosuu.forEach((element,index) => {
        localStorage.setItem(`item_kosuu${index}`,element)
    });
    for (let i = 0; i < 15; i++) {
        localStorage.setItem(`item_kosuu${i}`,item_kosuu[i])
        localStorage.setItem(`upgrade_level${i}`,upgrade_level[i])
        localStorage.setItem(`item_cost${i}`,item_cost[i])

        
    }
        console.log("cookie writed.")

}
function cookieload(){
    sirokumapoint = BigInt(localStorage.getItem('sirokumapoint'));
    skillplus = BigInt(localStorage.getItem('skillplus'));
    last_online = BigInt(localStorage.getItem("last_online"))
    for (let i = 0; i < 15; i++) {
        item_kosuu[i] = BigInt(localStorage.getItem(`item_kosuu${i}`,item_kosuu[i]))
        upgrade_level[i] = BigInt(localStorage.getItem(`upgrade_level${i}`,upgrade_level[i]))
        item_cost[i] = BigInt(localStorage.getItem(`item_cost${i}`,item_cost[i]))

        
    }
    for (let i = 0; i < 15; i++) {
        item_zouka[i] = 2n ** upgrade_level[i] * item_kosuu[i] * item_seinou[i]
    }
        console.log(localStorage);
    updateHyouji();
    itemzoukasyori();
    sirokumapoint += itemzouka * (BigInt(Math.floor(new Date().getTime() / 1000) - last_online));

    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')