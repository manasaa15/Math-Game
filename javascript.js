// if we click on start or reset button
var playing=false;
var score;
var action;
var timerem;
var correct;
document.getElementById('startre').onclick=function(){
    
    if(playing == true){  // if we are playing
        location.reload();
    }
    else{  
        playing = true;// if we are not playing
        score =0;   //set score to 0
        document.getElementById("scorevalue").innerHTML=score;

        document.getElementById("timerem").style.display="block";  // show coutndown box
        timerem=60;

        document.getElementById('timeremval').innerHTML=timerem;

        hide('over');

         //change button to reset
         document.getElementById("startre").innerHTML = "Reset Game";


         startcount();

         generateQA();
        
    }
}

function startcount(){
    action = setInterval(function(){
        timerem-=1;
        document.getElementById('timeremval').innerHTML=timerem;

        if(timerem==0){
            stopcount();
            show('over');
            document.getElementById('over').style.display="block";
            document.getElementById('over').innerHTML="<p> Game over <p/> <p> Your score is"+score +"  .</p>"
    
            hide('timerem');
            hide('correct');
            hide('wrong');
            playing=false;
            document.getElementById('startre').innerHTML="start game";
        }
    },1000);
    
        
    }

    function stopcount(){
        clearInterval(action);

    }

    function hide(id){
        document.getElementById(id).style.display="none";
    }

    function show(id){
        document.getElementById(id).style.display="block";
    }
    for(i=1;i<5;i++){
    document.getElementById('box'+i).onclick=function(){
        if(playing == true){
            if(this.innerHTML==correct){
                score++;
                document.getElementById('scorevalue').innerHTML=score;
                hide('wrong');
                show('correct');
                setTimeout(function(){
                    hide('correct');
                },1000);
                generateQA();
            }
            else{
                hide('correct');
                show('wrong');
                setTimeout(function(){
                    hide('wrong');
                },1000)
            }
        }

    }
}

    function generateQA(){
        var x = 1+Math.round(9*Math.random());
        var y = 1+Math.round(9*Math.random());
         correct = x*y;
        document.getElementById('qsn').innerHTML=x+"x"+y;

        var position = 1+Math.round(3*Math.random());
        document.getElementById('box'+position).innerHTML=correct;

        var answers = [correct];

        for(i=1;i<5;i++){
            if(i!=position){
                var wrongans;
                
                do{
                    wrongans = (1+Math.round(9*Math.random()))*1+(Math.round(9*Math.random()));//wrong answer
                }while(answers.indexOf(wrongans)>-1)
                

                document.getElementById('box'+i).innerHTML=wrongans;
                answers.push(wrongans);
            }
        }
    }

    
