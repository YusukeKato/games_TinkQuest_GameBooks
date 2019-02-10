// --------------------------------------------------------------------------------------------------------------
// Copyright (c) 2019 Yusuke Kato, All rights reserved.
// ゲームをクリアする前にソースコードを見てはいけない
// --------------------------------------------------------------------------------------------------------------

// ステージが更新されたらテキストも更新
function setting_stage(t, c1, c2, c3)
{
    document.getElementById("text").textContent = t;
    document.getElementById("c1").textContent = "（1）" + c1;
    document.getElementById("c2").textContent = "（2）" + c2;
    document.getElementById("c3").textContent = "（3）" + c3;
}

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

// 初期ステージ
function init_stage()
{
    var t = "あなたは見知らぬ部屋で目覚めた。部屋の中には木でできた机と椅子がある。";
    var c1 = "扉を開けて外に出る";
    var c2 = "窓から外をのぞく";
    var c3 = "夢から覚める";
    setting_stage(t, c1, c2, c3);
}

// HTML読み込み時に実行
window.onload = function()
{
    init_stage();
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

    if(stageNum == 1)
    {
        t = "扉を開けて部屋の外に出た。";
        c1 = "";
        c2 = "";
        c3 = "";
    }

    setting_stage(t, c1, c2, c3);
}