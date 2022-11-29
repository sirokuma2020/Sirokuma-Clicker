window.onload = onLoad;
function onLoad() {
    console.log("%cSirokumaClicker", 'color: black; font-size: xx-large; text-shadow:2px 0 5px #00ff00;')
    console.log("Version 2.0.s0  Bulid 0005\nCopyright (C) Nikachu All rights reserved.")
    console.log("最大値は9007199254740991[2^53]です")
    if (localStorage.getItem("firstLoad") == undefined) {
        cookiewrite();
        localStorage.setItem("firstLoad",1)
        console.log("welcome tp sirokuma clicker")
    }
    cookieload();
    itemloopPre();
    for (let i = 1; i < 16; i++) {
        item_update(i)
        
    }
}

console.log('onload.js loaded.')