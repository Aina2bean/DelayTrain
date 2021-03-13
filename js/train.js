let localTrain = '京王線'

let url = 'https://tetsudo.rti-giken.jp/free/delay.json';
fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json);
    console.log(json.length);
    console.log(json[5].name);
});


