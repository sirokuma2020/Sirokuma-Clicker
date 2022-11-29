let last_online = 0;
// Cookieの読み出し
function cookiewrite(){
    console.log(item_cost)
    localStorage.setItem('sirokumapoint', sirokumapoint);
    localStorage.setItem('skillplus', skillplus);
    localStorage.setItem('last_online', Math.floor(new Date().getTime() / 1000))
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
    sirokumapoint = parseInt(localStorage.getItem('sirokumapoint'),10);
    skillplus = parseInt(localStorage.getItem('skillplus'),10);
    last_online = parseInt(localStorage.getItem("last_online"),10)
    for (let i = 0; i < 15; i++) {
        item_kosuu[i] = parseInt(localStorage.getItem(`item_kosuu${i}`,item_kosuu[i]),10)
        upgrade_level[i] = parseInt(localStorage.getItem(`upgrade_level${i}`,upgrade_level[i]),10)
        item_cost[i] = parseInt(localStorage.getItem(`item_cost${i}`,item_cost[i]),10)

        
    }
    for (let i = 0; i < 15; i++) {
        item_zouka[i] = 2 ** upgrade_level[i] * item_kosuu[i] * item_seinou[i]
    }
        console.log(localStorage);
    updateHyouji();
    itemzoukasyori();
    sirokumapoint += itemzouka * (Math.floor(new Date().getTime() / 1000) - last_online);

    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')