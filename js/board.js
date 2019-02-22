//空のマスを押す回数.
var count = 0;

//既に選択されたマスをクリックすると起動.
function clickA(z){

    if(z.innerText != ""){
        alert("既に選択されたマスは選べません");
    return;
};

//先行は　〇　後攻は　✕に書き換える.
if(count++ %2 == 0){
        z.innerText = "○";
    } else {
        z.innerText = "×";
};

//マスを押すと毎回 judge()が毎回呼ばれ判定する.
var result = judge();
if(result){
        alert(result);
    };
};

//id属性を持つHTML要素を取得.
function judge(){

    var b0 = document.getElementById("b0").innerText;
    var b1 = document.getElementById("b1").innerText;
    var b2 = document.getElementById("b2").innerText;
    var b3 = document.getElementById("b3").innerText;
    var b4 = document.getElementById("b4").innerText;
    var b5 = document.getElementById("b5").innerText;
    var b6 = document.getElementById("b6").innerText;
    var b7 = document.getElementById("b7").innerText;
    var b8 = document.getElementById("b8").innerText;

    //8通りの勝ちパターン
    // 以下　マスの配置

    // b0 b1 b2
    // b3 b4 b5
    // b6 b7 b8

    //1行目横
    if(b0 == b1 && b1 == b2 && b0 != "" ){
        winner = b0;
    //2行目横
    } else if (b3 == b4 && b4 == b5 && b3 != "" ){
        winner = b3;
    //3行目横
    } else if (b6 == b7 && b7 == b8 && b7 != "" ){
        winner = b6;
    //b0から縦一列
    } else if (b0 == b3 && b3 == b6 && b0 != "" ){
        winner = b0;
    //b1から縦一列
    } else if (b1 == b4 && b4 == b7 && b1 != "" ){
        winner = b1;
    //b2から縦一列
    } else if (b2 == b5 && b5 == b8 && b2 != "" ){
        winner = b2;
    //b0 から b8にかけて斜め一列
    } else if (b0 == b4 && b4 == b8 && b0 != "" ){
        winner = b0;
    //b2 から b6にかけて斜め一列
    } else if (b2 == b4 && b4 == b6 && b2 != "" ){
        winner = b2;
    }

        if (winner) {
            var str = winner + "の勝ち";
        } else if (count == 9) {
            var str = "引き分け";
    }
        return str ;;
}