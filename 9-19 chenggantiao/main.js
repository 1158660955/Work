/**
 * Created by Administrator on 2016/9/19 0019.
 */
(function () {

    var canvas=document.getElementById("canvas");
    var cxt=canvas.getContext("2d");
    var j1x=0,j1y=0,j1h=0,j1w=60;
    var j2x=0,j2y=0,j2h=0,j2w=0;
    var j3x=0,j3y=0,j3h=0,j3w=0;
    var gunzic = 0,gunzix = 60,gunziy = 330;//棍子的长，x,y
    var playx = 40,playy = 330,fenshu = 0;
    
    function start() {
         j1x=0,j1y=0,j1h=0,j1w=60;
         j2x=0,j2y=0,j2h=0,j2w=0;
         j3x=0,j3y=0,j3h=0,j3w=0;
         gunzic = 0,gunzix = 60,gunziy = 330;//棍子的长，x,y
         playx = 40,playy = 330,fenshu = 0;
        
        cxt.fillStyle="#ABCDEF";
        cxt.fillRect(0,0,300,500);
        cxt.fillStyle="#000";
        cxt.fillRect(j1x,350,j1w,150);
        j2x=Math.floor(Math.random()*150+20)+j1x+j1w;
        j2w=Math.floor(Math.random()*150+20);
        cxt.fillRect(j2x,350,j2w,150);
        j3x=Math.floor(Math.random()*150+20)+j2x+j2w;
        j3w=Math.floor(Math.random()*150+20);
        cxt.fillRect(j3x,350,j3w,150);
        cxt.fillStyle="red";
        cxt.fillRect(playx,playy,20,20);
        score();
    }
    window.addEventListener("keydown",keydown,false);
    window.addEventListener("keyup",keyup,false);
    window.addEventListener("keyup",restart,false);
    start();

    function keydown(e) {
        var keycod = e.keyCode||e.which;//兼容火狐
        if(keycod===32){
            gunziy=gunziy-5;
            gunzic=350-gunziy;
            cxt.strokeStyle="#93c";
            cxt.lineWidth=3;
            cxt.moveTo(playx+20,playy+20);
            cxt.lineTo(gunzix,gunziy);
            cxt.stroke();
        }
    }

    function restart(e) {
        var keycod = e.keyCode||e.which;//兼容火狐
        if(keycod===13){
            start();
            window.addEventListener("keydown",keydown,false);
        }
    }

    function keyup(e) {
        var keycod = e.keyCode||e.which;//兼容火狐
        if(keycod===32){

            gunziy = 350;
            cxt.beginPath();               //生成向右的横线
            cxt.strokeStyle="red";
            cxt.lineWidth=4;
            cxt.moveTo(playx+20,playy+20);
            cxt.lineTo(playx+20+gunzic,gunziy);
            cxt.stroke();

            cxt.beginPath();
            cxt.strokeStyle="black";       //生成向上的竖线
            cxt.lineWidth=4;
            cxt.moveTo(playx+20,playy+20);
            cxt.lineTo(playx+20,350-gunzic);
            cxt.stroke();

            // cxt.save();
            // cxt.beginPath();
            // cxt.translate(playx+20,playy+20);
            // cxt.rotate(Math.PI/2);
            // cxt.moveTo(playx+20,playy+20);
            // cxt.lineTo(playx+20,350-gunzic);
            // cxt.closePath();
            // cxt.stroke();

            moveplay();
        }
    }

    function moveplay() {
        cxt.beginPath();
        cxt.strokeStyle="#abcdef";
        cxt.fillStyle="#abcdef";
        cxt.fillRect(playx,playy,20,20);
        cxt.stroke();
        cxt.beginPath();
        cxt.strokeStyle="red";
        cxt.fillStyle="red";
        playx=playx+5;
        cxt.fillRect(playx,playy,20,20);
        cxt.stroke();
        if(playx<=gunzic+j1w){
            setTimeout(moveplay,20);
        }else {
            if(j1w+gunzic<(j2x+j2w)&&j1w+gunzic>j2x){
                cxt.beginPath();
                cxt.strokeStyle="#abcdef";
                cxt.fillStyle="#abcdef";
                cxt.fillRect(playx,playy,20,20);
                cxt.stroke();
                cxt.beginPath();
                cxt.strokeStyle="red";
                cxt.fillStyle="red";
                playx=j2x+j2w-20;
                cxt.fillRect(playx,playy,20,20);
                cxt.stroke();
                fenshu++;
                moveall();
            }else{
                gameover();
            }
        }

    }
    
    function score() {
        cxt.fillStyle = "#fff";
        cxt.font="60px 宋体";
        cxt.fillText(fenshu,140,60);
    }

    function moveall() {              //移动画布
        cxt.fillStyle="#abcdef";
        cxt.fillRect(0,0,300,500);
        cxt.fillStyle="#000";
        j1x--;
        j2x--;
        j3x--;
        playx--;
        cxt.fillRect(j1x,350,j1w,150);
        cxt.fillRect(j2x,350,j2w,150);
        cxt.fillRect(j3x,350,j3w,150);
        cxt.fillStyle="red";
        cxt.fillRect(playx,playy,20,20);
        score();
        if(j2x>=0){
            setTimeout(moveall,3);
        }else{
            change();
        }
    }

    function change() {
        j1x=j2x;
        j1w=j2w;
        j2x=j3x;
        j2w=j3w;
        j3x=Math.floor(Math.random()*150+20)+j2x+j2w;
        j3w=Math.floor(Math.random()*150+20);
        gunzix=j1w;
    }

    function gameover() {
        cxt.fillStyle="#abcdef";
        cxt.fillRect(0,0,300,500);
        cxt.fillStyle = "red";
        cxt.font="60px 宋体";
        cxt.fillText("GAME OVER",20,60);
        cxt.fillText("scrore:",60,200);
        cxt.fillText(fenshu,150,300);
        cxt.font="30px 宋体"
        cxt.fillText("按Enter继续",70,400);
        removeEventListener("keydown",keydown,false);
    }

})();