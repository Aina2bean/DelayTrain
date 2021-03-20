let inputStation = document.getElementById('input-station');
let inputButton = document.getElementById('input-button');
let resultOutput = document.getElementById('result-area');

let localTrain = '特急サザン' // 自分の最寄り駅の路線の指定

let url = 'https://tetsudo.rti-giken.jp/free/delay.json'; // 読み込むjsonファイルの指定
fetch(url)
.then(response => response.json())
.then(json => {
    setData(json); // setDataにjsonファイルのデータを受け渡す
});

function setData(json){
    // 現在遅延している路線を配列としてlocalDataに格納、delayInfoに返す
    function delayInfo(num){
        let localData = [];
        for(let i = 0; i < json.length; i++) {
            localData.push(json[i].name);
        }
        return localData;
    }
    result = delayInfo();
    console.log(result); // 配列が変数の中に入っているか確認用のconsole.log

    // 指定した路線が含まれているかの判断
    if(result.indexOf(localTrain) == -1 ) {
        // 遅延していない時の処理
        console.log(localTrain + 'は遅れてないよ');
    } else {
        // 遅延している時の処理
        console.log(localTrain + 'は遅れてるよ');
    }
}


