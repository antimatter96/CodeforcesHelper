// ==UserScript==
// @name         Ladder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://a2oj.com/ladder?ID=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var w = document.createElement('style');

    var s = "body{background:white;}table.tablesorter {font-family:sans-serif;margin:10px 0pt 15px;font-size: 12px;width: 80%;text-align: left;background-color: #fff;border-spacing:0px 8px; border: solid #fff;border-radius:0px;}";
    var s1 = "table.tablesorter thead tr th, table.tablesorter tfoot tr th {font-size: 12px;padding: 5px 4px;background:white;}table.tablesorter thead tr .header {background-image: url(bg.gif);background-repeat: no-repeat;background-position: center right;cursor: pointer;}";
    var e = "table.tablesorter tbody td {color: #Fff;padding: 9px 0px;background-color:rgb(255,111,0);vertical-align: top;border-bottom:2px solid #fff;}";
    var c = "table.tablesorter tbody tr.odd td {background-color:rgb(255,160,0);color:#fff; }table.tablesorter tbody tr.acc td { background-color:#0DFF0F; color:#fff}";
    var c1 = "table.tablesorter tbody tr.acc22 td {background-color: rgba(55,200,55,0.95);}}";
    var t = "table.tablesorter tbody tr.wa td {background-color:#F08080;}table.tablesorter tbody tr.wa22 td {background-color:rgb(240, 128, 128);}";
    var t1 = "table.tablesorter tbody tr.prt td {background-color:rgb(255, 204, 153);}";
    var l = "table.tablesorter tbody tr.odd2 td {background-color:#F00a0a;color: #A4A4A4;}";
    var l1 = "table.tablesorter tbody tr.acc2 td {background-color:#ADFF2F;font-style: italic;color: #A4A4A4;}";
    var y = "table.tablesorter tbody tr.wa2 td {background-color:#F08080;font-style: italic;color: #A4A4A4;}";
    var y1 = "table.tablesorter tbody tr.ev2 td {font-style: italic;color: #A4A4A4;}";
    var k = "table.tablesorter tbody tr.problem td {background-color: #e6EEEE;border: 1px solid #FFF;font-size: 8pt;font-weight: bold;}";
    var k1 = "table.tablesorter tbody tr td.gg {background-color:#ADFF2F;}table.tablesorter tbody tr td.gg3 {background-color:#5CADFF;}table.tablesorter tbody tr td.gg2 {background-color:#8ACC26;}";
    var u = "table.tablesorter tbody tr td.yy {background-color:#F2F5A7;}table.tablesorter tbody tr td.rr {background-color:#F08080;}table.tablesorter tbody tr.odd td.gg {background-color:#ADFF2F;}";
    var g = "table.tablesorter tbody tr.odd td.gg3 {background-color:#5CADFF;}table.tablesorter tbody tr.odd td.gg2 {background-color:#8ACC26;}table.tablesorter tbody tr.odd td.rr {background-color:#F08080;}";
    var g2 = "table.tablesorter thead tr .headerSortUp {background-image: url(asc.gif);}table.tablesorter thead tr .headerSortDown {background-image: url(desc.gif);}";
    var a = "table.tablesorter thead tr .headerSortDown, table.tablesorter thead tr .headerSortUp {background-color: #8dbdd8;}";
    var aw = "table.tablesorter tbody tr td{border-top:2px solid rgba(0,0,0,0.25); border-bottom:2px solid rgba(0,0,0,0.25); } table.tablesorter tbody tr td:first-child{border-radius:6px 0px 0px 6px;border:2px solid rgba(0,0,0,0.25);    border-right: 0px;}table.tablesorter tbody tr td:nth-child(5){border-radius:0px 6px 6px 0px;border:2px solid rgba(0,0,0,0.25);    border-left: 0px;} ";
    var aw2 = "table.tablesorter tbody tr td:nth-child(3),table.tablesorter tbody tr td:nth-child(6){display:none; } table.tablesorter thead tr th:nth-child(3),table.tablesorter thead tr th:nth-child(6){display:none;}";

    w.innerHTML = s + s1 + e + c +c1+ t+t1 +l+l1+ y+y1 +k+k1+ u+g+g2+ a + aw + aw2;

    var counter = document.getElementsByTagName('a')[25];
    counter.style.width = "100px";
    counter.style.height = "40px";
    counter.style.position = "fixed";
    counter.style.top = "10px";
    counter.style.right = "10px";
    counter.style.color = "#ffffff";
    counter.style.background = "rgba(55,200,55,.95)";
    counter.style.textAlign = "center";
    counter.style.lineHeight = "40px";
    counter.style.fontSize = "1rem";
    counter.style.borderRadius = "7px";
    counter.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
    counter.style.padding = "5px 10px";
    counter.textContent = "Update";
    counter.textDecoration = "none";
    counter.style.fontFamily = "sans-serif";
    counter.style.textTransform = "uppercase";
    counter.style.textDecoration = "none";
    counter.style.fontWeight = "700";
    document.body.append(w);

    // Your code here...
})();
