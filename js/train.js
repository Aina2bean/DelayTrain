let localTrain = '特急サザン'

let url = 'https://tetsudo.rti-giken.jp/free/delay.json';
fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json);
    function delayInfo(num){
        let localData = [];
        for(let i = 0; i < json.length; i++) {
            localData.push(json[i].name);
        }
        return localData;
    }
    result = delayInfo();
    console.log(result);
    if(result.indexOf(localTrain) == -1 ) {
        console.log(localTrain + 'は遅れてないよ');
    } else {
        console.log(localTrain + 'は遅れてるよ');
    }
});


