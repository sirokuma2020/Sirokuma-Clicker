// Cookieの読み出し
function cookiewrite(){

    localStorage.setItem('sirokumapoint', sirokumapoint);
    localStorage.setItem('skillplus', skillplus);
    item_kosuu.forEach((element,index) => {
        localStorage.setItem(`item_kosuu${index}`,element)
    });
    upgrade_level.forEach((element,index) => {
        localStorage.setItem(`upgrade_level${index}`,element)
    });
    item_cost.forEach((element,index) => {
        localStorage.setItem(`item_cost${index}`,element)
    });
        console.log("cookie writed.")

}
function cookieload(){
    sirokumapoint = parseInt(localStorage.getItem('sirokumapoint'),10);
    skillplus = parseInt(localStorage.getItem('skillplus'),10);
    item_kosuu.forEach((element,index) => {
        item_kosuu[element] = parseInt(localStorage.getItem(`item_kosuu${index}`),10)
    });
    upgrade_level.forEach((element,index) => {
        upgrade_level[element] = parseInt(localStorage.getItem(`upgrade_level${index}`),10)
    });
    item_cost.forEach((element,index) => {
        item_cost[element] = parseInt(localStorage.getItem(`item_cost${index}`),10)
    });

    console.log(localStorage);
    updateHyouji();
    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')