// --------------------------------------------------------------------------------------------------------------
// Copyright (c) 2019 Yusuke Kato, All rights reserved.
// ゲームをクリアする前にソースコードを見てはいけない
// --------------------------------------------------------------------------------------------------------------

// stage data
var data;
var stage_num = 0;

// GOボタンが押されたらステージを更新
function button_go()
{
    update_stageText(stage_num);
    //var stageNum = document.getElementById("stageNum").textContent;
    var choices = document.getElementById("choices").textContent;
    init_choices();
    stage_num = update_stages(stage_num, choices);
    update_stageText(stage_num);
}

// 選択肢の番号を初期化
function init_choices()
{
    document.getElementById("choices").textContent = 0;
}

// HTML読み込み時に実行
window.onload = function()
{
    read_json();
}

// JSONデータ読み込み(jQuery)
function read_json()
{
    $.ajax({
        type: 'GET',
        url: 'https://yusukekato.github.io/games_TinkQuest_GameBooks/data.json',
        dataType: 'json',
        success: function(json) {
            // パースの必要なし
            data = json;
        }
    });
}

// ステージが更新されたらテキストも更新
function setting_stage(t, c1, c2, c3)
{
    document.getElementById("text").textContent = t;
    document.getElementById("c1").textContent = "（1）" + c1;
    document.getElementById("c2").textContent = "（2）" + c2;
    document.getElementById("c3").textContent = "（3）" + c3;
}

// 選択肢によってステージ番号を更新
function update_stages(stageNum, choices)
{
    if(choices == 1) return data[stageNum].one;
    else if(choices == 2) return data[stageNum].two;
    else if(choices == 3) return data[stageNum].three;
    else return stageNum;
}

// ステージ番号によってテキストを表示
function update_stageText(stageNum)
{
    document.getElementById("stageNum").textContent = data[stageNum].snum;
    var t = "エラー"; var c1 = ""; var c2 = ""; var c3 = "";

    // dataは配列になっているから、data[n].t、みたいにnを指定する
    t = data[stageNum].t;
    c1 = data[stageNum].c1;
    c2 = data[stageNum].c2;
    c3 = data[stageNum].c3;

    setting_stage(t, c1, c2, c3);
}