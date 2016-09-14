/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {

    var mycanvas=document.getElementById("mycanvas");
    var otex=mycanvas.getContext("2d");
    otex.beginPath();
    otex.arc(375,250,200,0,2*Math.PI);
    otex.strokeStyle="red";
    otex.lineWidth=50;
    otex.stroke();
    otex.closePath();

    otex.save();
    otex.beginPath();
    otex.arc(375,250,150,0,2*Math.PI);
    otex.strokeStyle="white";
    otex.lineWidth=50;
    otex.stroke();
    otex.closePath();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.arc(375,250,100,0,2*Math.PI);
    otex.strokeStyle="red";
    // otex.lineWidth=1;
    otex.stroke();
    otex.closePath();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.arc(375,250,75,0,2*Math.PI);
    otex.fillStyle="blue";
    otex.fill();
    otex.lineWidth=1;
    otex.stroke();
    otex.closePath();
    otex.restore();

    otex.save();
    otex.beginPath();
    otex.moveTo(375,175);
    for(var i=0;i<10;i+=2){
        var ox=75*Math.cos(i*72*Math.PI/180-Math.PI/2)+375;
        var oy=75*Math.sin(i*72*Math.PI/180-Math.PI/2)+250;
        otex.lineTo(ox,oy);
    }
    otex.lineWidth=1;
    otex.closePath();
    otex.stroke();
    otex.fillStyle="white";
    otex.fill();
    otex.restore();

    
})();