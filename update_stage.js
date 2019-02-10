// --------------------------------------------------------------------------------------------------------------
// Copyright (c) 2019 Yusuke Kato, All rights reserved.
// ゲームをクリアする前にソースコードを見てはいけない
// --------------------------------------------------------------------------------------------------------------

// GOボタンが押されたらステージを更新
function button_go()
{
    var stageNum = document.getElementById("stageNum").textContent;
    var choices = document.getElementById("choices").textContent;
    init_choices();
    stageNum = update_stages(stageNum, choices);
    update_stageText(stageNum);
}

// 選択肢の番号を初期化
function init_choices()
{
    document.getElementById("choices").textContent = 0;
}

// HTML読み込み時に実行
window.onload = function()
{
    update_stageText(0);
    read_json();
}

// JSONデータ読み込み
function read_json()
{
    $.ajax({
        type: 'GET',
        url: 'https://yusukekato.github.io/games_TinkQuest_GameBooks/data.json',
        dataType: 'json',
        success: function(json) {
            console.log(json);
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
    if(stageNum == 0)
    {
        if(choices == 1) return 1;
        else if(choices == 2) return 2;
        else if(choices == 3) return 3;
        else return stageNum;
    }

    else return stageNum;
}

// ステージ番号によってテキストを表示
function update_stageText(stageNum)
{
    document.getElementById("stageNum").textContent = stageNum;
    var t = "エラー"; var c1 = ""; var c2 = ""; var c3 = "";

    if(stageNum == 0)
    {
        t = "あなたは見知らぬ部屋で目を覚ました。部屋の中には木でできた机と椅子、\
            太陽の光がさす窓が一つ、そして外へ続く扉がある。なぜ自分がここにいるのか記憶がない。";
        c1 = "扉を開けて外に出る";
        c2 = "窓から外をのぞく";
        c3 = "夢から覚める";
    }

    if(stageNum == 1)
    {
        t = "扉を開けて部屋の外に出た。";
        c1 = "";
        c2 = "";
        c3 = "";
    }

    setting_stage(t, c1, c2, c3);
}