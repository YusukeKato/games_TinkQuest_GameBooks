// --------------------------------------------------------------------------------------------------------------
// Copyright (c) 2019 Yusuke Kato, All rights reserved.
// ゲームをクリアする前にソースコードを見てはいけない
// --------------------------------------------------------------------------------------------------------------

var choices = 0;

function button1()
{
    choices = 1;
    updateChoices(choices);
}

function button2()
{
    choices = 2;
    updateChoices(choices);
}

function button3()
{
    choices = 3;
    updateChoices(choices);
}

function updateChoices(num)
{
    document. getElementById("choices"). textContent = num;
}