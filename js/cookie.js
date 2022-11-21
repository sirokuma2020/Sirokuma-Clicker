// Cookieの読み出し
function cookiewrite(){

    localStorage.setItem('sirokumapoint', sirokumapoint);
    localStorage.setItem('skillplus', skillplus);
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
    for (let i = 0; i < 15; i++) {
        item_kosuu[i] = parseInt(localStorage.getItem(`item_kosuu${i}`,item_kosuu[i]),10)
        upgrade_level[i] = parseInt(localStorage.getItem(`upgrade_level${i}`,upgrade_level[i]),10)
        item_cost[i] = parseInt(localStorage.getItem(`item_cost${i}`,item_cost[i]),10)

        
    }


    console.log(localStorage);
    updateHyouji();
    console.log("cookie loaded.")
}

console.log('cookie.js loaded.')