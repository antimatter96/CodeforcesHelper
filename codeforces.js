// ==UserScript==
// @name         Codeforces Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  |D
// @author       Arpit Jain
// @match        http://codeforces.com/problemset*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var count = document.getElementsByClassName('accepted-problem').length;
    var counter = document.createElement('div');
	counter.id = "counter";
    var as = document.getElementsByClassName('problems')[0];
    var totalCount = as.getElementsByTagName('tr').length-1;
    counter.innerText = " " + count + " / " + totalCount + " done";
	
	counter.style.width = "125px";
    counter.style.height = "50px";
    counter.style.position = "fixed";
    counter.style.top = "10px";
    counter.style.right = "10px";
    counter.style.color = "#ffffff";
    counter.style.background = "rgba(55,200,55,.95)";
    counter.style.textAlign = "center";
    counter.style.lineHeight = "50px";
    counter.style.fontSize = "1.25rem";
    counter.style.borderRadius = "7px";
    counter.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
    counter.style.fontWeight = "900";
	
	var container = document.createElement('div');
	var textBox = document.createElement('input');
	textBox.id = "filterInput";
	var button = document.createElement('button');
	container.style.width = "150px";
    container.style.height = "50px";
    container.style.position = "fixed";
    container.style.top = "75px";
    container.style.right = "10px";
    container.style.color = "#ffffff";
    container.style.background = "rgba(55,55,200,.85)";
    container.style.textAlign = "center";
    container.style.lineHeight = "50px";
    container.style.fontSize = "1.25rem";
    container.style.borderRadius = "7px";
    container.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
    container.style.fontWeight = "900";
    
    textBox.style.width = "50px";
    textBox.style.background = "rgba(255,255,255,.95)";    
    textBox.style.padding = "0.75rem";
    textBox.style.border = "0";
    textBox.style.fontSize = "1.25rem";
    textBox.style.borderRadius = "3px 0px 0px 3px";
    textBox.style.boxShadow = "0px 0px 5px 0px rgba(255,255,255,0.25)";
    
    button.innerText = "Filter";
    button.style.color = "#efefef";
    button.style.background = "rgba(55,175,55,.95)";
    button.style.textAlign = "center";
    button.style.padding = "0.75rem";
    button.style.border = "0";
    button.style.fontSize = "1.4rem";
    button.style.borderRadius = "0px 3px 3px 0px";
    button.style.boxShadow = "0px 0px 5px 0px rgba(255,255,255,0.25)";
    button.style.marginLeft = "-1px";
    
    var parent = document.getElementsByClassName('datatable')[0];
    parent.appendChild(counter);
	parent.appendChild(container);
	container.appendChild(textBox);
	container.appendChild(button);
	
	button.addEventListener('click',function(){
		var textBoxValue = document.getElementById("filterInput").value.toUpperCase();
		var r = /[abcdefABCDEF]{1}/;
		if(r.test(textBoxValue)){
			var allRows = document.getElementsByClassName('id');
            var al = allRows.length;
			var as = document.getElementsByClassName('problems')[0].firstElementChild;
			for(var i=0;i<al;i++){
				var temp = allRows[i].innerText;
				temp = temp.replace(/[1234567890]/g,"");
                var letter = temp;
				if(textBoxValue!==letter){
                    as.removeChild(allRows[i].parentNode);
                    i--;
                    al--;
				}
			}
		}
		var count = document.getElementsByClassName('accepted-problem').length;
		var counter = document.getElementById('counter');
		var aq = document.getElementsByClassName('problems')[0];
		var totalCount = aq.getElementsByTagName('tr').length-1;
		counter.innerText = " " + count + " / " + totalCount + " done";
	});
	
    var aw = document.createElement('style');
    aw.innerHTML = ".accepted-problem td {background-color: rgba(55,200,55,0.75) !important;}.problems .accepted-problem td.act {background-color: rgba(55,200,55,0.75) !important;}";
    document.body.append(aw);
    
    
})();
