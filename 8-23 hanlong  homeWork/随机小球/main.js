/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function () {
    function Balls() {
        var container=document.querySelector("#container");
        var div=document.createElement("div");
        div.className="ball";
        container.appendChild(div);
        // div.style.top=(Math.random()*800)+"px";
        // div.style.left=(Math.random()*800)+"px";
            
        function speed() {
            var a=Math.random();
            var ballX=Math.random()*800;
            var ballY=Math.random()*800;
            var directX=Math.ceil(Math.random()*10);
            var directY=Math.ceil(Math.random()*10);
            // div.style.top=(Math.random()*800)+"px";
            // div.style.left=(Math.random()*800)+"px";
            if (a<=0.5){
                id=setInterval(function () {
                    ballX+=2*directX;
                    ballY+=2*directY;
                    div.style.top=ballY+"px";
                    div.style.left=ballX+"px";
  
                    if (ballY>1000){
                        // ballX=1000;
                        // ballY=600;
                        clearInterval(id);
                    }
                },100);
            }else {
                id2=setInterval(function () {
                    ballX-=2*directX;
                    ballY-=2*directY;
                    div.style.top=ballY+"px";
                    div.style.left=ballX+"px";
                    if (ballY<-1000){
                        // ballX=-1000;
                        // ballY=-600;
                        clearInterval(id2);
                    }
                },100);
            }
        }
        speed();
    }
    
     for (var i=1;i<20;++i){
         Balls(); 
     }
    
})();