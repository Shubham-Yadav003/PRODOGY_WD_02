            var mini = 00;
            var sec = 00;
            var min = 00;
            var hr = 00;
            
            var appendmini  = document.getElementById("minisec");   
            var appendsec   = document.getElementById("seconds");
            var appendmin = document.getElementById("minutes");
            var appendhr =  document.getElementById("hour")
            var  START = document.getElementById("START");
            var  PAUSE = document.getElementById("PAUSE");
            var RESET = document.getElementById("RESET");
            var  loop;
           
           
            function Startwatch()
            {
          
           loop = setInterval(stopwatch,10);
           document.getElementById("circle").classList.add("animation");
           document.getElementById("circle").style.animationPlayState="running";
           START.innerHTML = "START";
           }
           
                
                
                //function to initiate the stopwatch
                  function stopwatch(){
                     
                  mini++;//miliseconds
                  if(mini<=9)
                  {
                   appendmini.innerHTML= "0"+mini; 
                  }
                  else{
                
                if(mini > 9){
                   appendmini.innerHTML= mini; 
                            }
                            
               //seconds
                if(mini >99){
                   sec++;
                   appendsec.innerHTML = "0"+sec;
                   mini = 0;
                   appendmini.innerHTML= "0"+ 0; 
                           }
                 if(sec>9){
                   appendsec.innerHTML = sec;
                          }
              //minutes
                 if(sec >59){
                  min++;
                  appendmin.innerHTML = "0" +min;
                  sec = 0;
                  appendsec.innerHTML="0"+0;
                            }
              
               if(min>9){
                  appendmin.innerHTML = min;
                        }
                        
            //hours      
           if(min >59){
               hr++;
               appendhr.innerHTML = "0" +hr;
               min= 0;
               appendhr.innerHTML="0"+0;
                      }
            
            if(hr<9){
                appendhr.innerHTML = "0"+hr;
                    }
            if(hr>9){
                appendhr.innerHTML = hr;
                    }
           if(hr >23){
    
                appendhr.innerHTML = "0"+0;
                appendmin.innerHTML = "0"+0;
                appendsec.innerHTML = "0"+0;
                appendmini.innerHTML = "0"+0;
                alert("24 hours done");
                document.getElementById("circle").style.animationPlayState="paused";
                clearInterval(loop);
                    }
                    }
                    }
            
            
  
            function STOPW(){
                clearInterval(loop);
                document.getElementById("circle").style.animationPlayState="paused";
                START.innerHTML = "RESUME";
               

            }
          
                     

            function RESETW(){
            mini = 00;
            sec = 00;
            min = 00;
            hr = 00;
             appendmini.innerHTML = "0"+0;
             appendsec.innerHTML = "0"+0;
             appendmin.innerHTML = "0"+0;
             appendhr.innerHTML = "0"+0;
             clearInterval(loop);
             document.getElementById("circle").classList.remove("animation");
             START.innerHTML = "START";

            }
            function mode(){
            document.getElementById("body").classList.toggle("lightbody");
            document.getElementById("innerdiv").classList.toggle("lightinner");
            document.getElementById("outerdiv").classList.toggle("lightouter");
            document.getElementById("heading").classList.toggle("lightheading");
            document.getElementById("START").classList.toggle("lightbuttonblue");
            document.getElementById("PAUSE").classList.toggle("lightbutton");
            document.getElementById("RESET").classList.toggle("lightbutton");
            document.getElementById("circle").classList.toggle("lightstroke");
            var dark = document.getElementById("darkdiv");  
            var light = document.getElementById("lightdiv");
            light.classList.toggle("class");
          
                        }