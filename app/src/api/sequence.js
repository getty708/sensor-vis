import axios from 'axios'


//
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
//
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length-1;++i){
        let row = tmp[i+1].split(',')
	result[i] = {
            "time": row[0], "label": row[1], "label_id": Number(row[2]),
            "pitch": Number(row[3]), "roll": Number(row[4]), "yaw": Number(row[5]),
        };
    }
    console.log("result@convertCSVtoArray",result);
    return result;
}


export function fetchSequence(url){
    console.log("fetchSequence:", url);    
    return axios.get(url)
        .then(function (response){
            const data  = convertCSVtoArray(response.data);
            return data;
        })
        .catch(function (error){
            console.warn(error);
        });
}
