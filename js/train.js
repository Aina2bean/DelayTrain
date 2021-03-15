let localTrain = '京王線'

let url = 'https://tetsudo.rti-giken.jp/free/delay.json';
fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json);
    function ttt(){
        for(let i = 0; i < json.length; i++) {
            let stationList = json[i].name;
            console.log(stationList);
            return stationList;
        }
    }
    localData = ttt();
    //if(stationList.indexOf(localTrain)) {
        //console.log('あるよ');
    //} else {
        //console.log('ないよ');
    //}
});


