console.log("darkmode.js loaded.")
function valueChange(event){
    if (darkmodeSwitch.checked){
      console.log("ダークモードが設定されました")
      document.getElementById('darkmode').innerHTML = "@import url(css/darkmode.css);";

    }
    else{
      console.log("ダークモードが解除されました")
      document.getElementById('darkmode').innerHTML = "";
    }
  }

  darkmodeSwitch.addEventListener('change', valueChange);