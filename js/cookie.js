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
    sirokumapoint = localStorage.getItem('sirokumapoint');
    skillplus = localStorage.getItem('skillplus');
    item_kosuu.forEach((element,index) => {
        item_kosuu[element] = localStorage.getItem(`item_kosuu${index}`)
    });
    upgrade_level.forEach((element,index) => {
        upgrade_level[element] = localStorage.getItem(`upgrade_level${index}`)
    });
    item_cost.forEach((element,index) => {
        item_cost[element] = localStorage.getItem(`item_cost${index}`)
    });

    console.log(localStorage);
    updateHyouji();
    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')