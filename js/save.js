// autosave

setInterval(autosave, 10000);

function autosave(){


    //document.getElementById('autosave-text').innerHTML = "オートセーブしました";  
    
    cookiewrite();
}

console.log('save.js loaded.')