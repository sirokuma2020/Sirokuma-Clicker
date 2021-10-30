sirokumapoint = 0;

function pushSirokuma() { // しろくまが押されたとき
    sirokumapoint = sirokumapoint + 1;
    updateHyouji();
}

function pushClicker() { // タイトルの「クリッカー」が押されたとき
    sirokumapoint = sirokumapoint + 100000; /* 100,000 */
    updateHyouji();
}

function pushSirokumaTitle() { // タイトルの「しろくま」が押されたとき
    sirokumapoint = sirokumapoint + 1000000000; /* 1,000,000,000 */
    updateHyouji();
}

function updateHyouji(){ // 表示のアップデート用
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "&nbsp しろくま";
    console.log("表示を更新しました！しろくま数は" + sirokumapoint + "です")
}