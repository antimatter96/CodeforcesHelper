// ==UserScript==
// @name         Codeforces Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://codeforces.com/problemset*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var qw = window.location.pathname.split('/')[2];
    if(qw==="problem"){
        var problemID = window.location.pathname.split('/')[3] + window.location.pathname.split('/')[4];
        
        var listOfProblems = window.localStorage.arpitProblems || "";
        listOfProblems = listOfProblems.split(',');
        
        var parent = document.getElementById("pageContent");
        if(listOfProblems.indexOf(problemID)>-1){
            //Pehle se he
            
            var notice = document.createElement('div');
            notice.style.width = "150px";
            notice.style.height = "50px";
            notice.style.position = "fixed";
            notice.style.top = "10px";
            notice.style.right = "25px";
            notice.style.color = "#ffffff";
            notice.style.background = "rgba(55,200,55,.95)";
            notice.style.textAlign = "center";
            notice.style.lineHeight = "50px";
            notice.style.fontSize = "1.25rem";
            notice.style.borderRadius = "7px";
            notice.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
            notice.style.fontWeight = "900";
            notice.innerText = "Marked As Done";
            
            var noBtn = document.createElement('button');
            noBtn.innerText = "Mark Undone";
            noBtn.style.width = "80px";
            noBtn.style.height = "50px";
            noBtn.style.position = "fixed";
            noBtn.style.top = "65px";
            noBtn.style.right = "25px";
            noBtn.style.color = "#efefef";
            noBtn.style.background = "rgba(175,55,55,.95)";
            noBtn.style.textAlign = "center";
            noBtn.style.padding = "0.75rem";
            noBtn.style.border = "0";
            noBtn.style.fontSize = "1.4rem";
            noBtn.style.borderRadius = "0px 3px 3px 0px";
            noBtn.style.boxShadow = "0px 0px 5px 0px rgba(255,255,255,0.25)";
            noBtn.style.marginLeft = "-1px";
            noBtn.style.fontSize = "1.25rem";
            noBtn.style.borderRadius = "7px";
            noBtn.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
            noBtn.style.fontWeight = "900";
          
            parent.appendChild(noBtn);
            parent.appendChild(notice);
            
            noBtn.addEventListener('click',function(){
            window.localStorage.arpitProblems = window.localStorage.arpitProblems.replace(problemID,"");
            window.location.reload();
            });

         
        }
        else{

            var yesBtn = document.createElement('button');
            yesBtn.innerText = "Mark Done";
            yesBtn.style.width = "75px";
            yesBtn.style.height = "50px";
            yesBtn.style.position = "fixed";
            yesBtn.style.top = "10px";
            yesBtn.style.right = "25px";
            yesBtn.style.color = "#efefef";
            yesBtn.style.background = "rgba(55,175,55,.95)";
            yesBtn.style.textAlign = "center";
            yesBtn.style.padding = "0.75rem";
            yesBtn.style.border = "0";
            yesBtn.style.fontSize = "1.4rem";
            yesBtn.style.borderRadius = "0px 3px 3px 0px";
            yesBtn.style.boxShadow = "0px 0px 5px 0px rgba(255,255,255,0.25)";
            yesBtn.style.marginLeft = "-1px";
            yesBtn.style.fontSize = "1.25rem";
            yesBtn.style.borderRadius = "7px";
            yesBtn.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
            yesBtn.style.fontWeight = "900";
            
            yesBtn.addEventListener('click',function(){
                window.localStorage.arpitProblems+=","+problemID;
                window.location.reload();
            });
            
            parent.appendChild(yesBtn);
        }
    }
    else{
        
        var counter = document.createElement('div');
        counter.id = "counter";
        
            
            
        
        //counter.style.width = "125px";
        counter.style.height = "50px";
        counter.style.position = "fixed";
        counter.style.top = "10px";
        counter.style.right = "10px";
        counter.style.color = "#ffffff";
        counter.style.background = "rgba(55,200,55,.95)";
        counter.style.textAlign = "center";
        //counter.style.lineHeight = "50px";
        counter.style.fontSize = "1.25rem";
        counter.style.borderRadius = "7px";
        counter.style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.25)";
        counter.style.display = "flex";
        counter.style.alignItems = "center";
        counter.style.padding = "10px 20px";
        
        counter.style.fontWeight = "900";

        var container = document.createElement('div');
        var textBox = document.createElement('input');
        textBox.id = "filterInput";
        var button = document.createElement('button');
        container.style.width = "150px";
        container.style.height = "50px";
        container.style.position = "fixed";
        container.style.top = "125px";
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
                    //console.log(temp);
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
            var subCount = document.getElementsByClassName('easily-solvable').length;
            var counter = document.getElementById('counter');
            var aq = document.getElementsByClassName('problems')[0];
            var totalCount = aq.getElementsByTagName('tr').length-1;
            counter.innerText = " " + count-subCount + " / " + totalCount + " done \n" + subCount + " marked as done";
        });
        
        var listOfProblemsDone = window.localStorage.arpitProblems || "";
        listOfProblemsDone = listOfProblemsDone.split(',');

        var allRows = document.getElementsByClassName('id');
        var al = allRows.length;
        var as = document.getElementsByClassName('problems')[0].firstElementChild;
                
        for(var i=0;i<al;i++){
                    var temp = allRows[i].innerText;
                    if(listOfProblemsDone.indexOf(temp)>-1){
                        allRows[i].parentNode.classList.add('accepted-problem');
                        allRows[i].parentNode.classList.add('easily-solvable');
                    }
        }
        
        var count = document.getElementsByClassName('accepted-problem').length;
        var subCount = document.getElementsByClassName('easily-solvable').length;
        var as = document.getElementsByClassName('problems')[0];
        var totalCount = as.getElementsByTagName('tr').length-1;
        counter.innerText = " " + count-subCount + " / " + totalCount + " done \n" + subCount + " marked as done";

        
        var aw = document.createElement('style');
        aw.innerHTML = ".accepted-problem td{background-color: rgba(55,200,55,0.75) !important;}.problems .accepted-problem td.act{background-color: rgba(55,200,55,0.75) !important;}";
        var aw2 = document.createElement('style');
        aw2.innerHTML = ".easily-solvable td{background-color: rgba(255,150,0,0.75) !important;}.problems .easily-solvable td.act{background-color: rgba(255,150,0,0.75) !important;}";
        document.body.append(aw);
        document.body.append(aw2);
        
    }
    
    
    
})();
