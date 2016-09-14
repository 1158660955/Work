/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {

/*
     //扇形
     CanvasRenderingContext2D.prototype.sector = function shanxing(x, y, radius, sDeg, eDeg) {
     // 初始保存
     this.save();
     // 位移到目标点
     this.translate(x, y);
     this.beginPath();
     // 画出圆弧
     this.arc(0,0,radius,sDeg, eDeg);
     // 再次保存以备旋转
     this.save();
     // 旋转至起始角度
     this.rotate(eDeg);
     // 移动到终点，准备连接终点与圆心
     this.moveTo(radius,0);
     // 连接到圆心
     this.lineTo(0,0);
     // 还原
     this.restore();
     // 旋转至起点角度
     this.rotate(sDeg);
     // 从圆心连接到起点
     this.lineTo(radius,0);
     this.closePath();
     // 还原到最初保存的状态
     this.restore();
     return this;
     };
     */


    var mycanvas=document.getElementById("mycanvas");
    var otex=mycanvas.getContext("2d");
   //一个整圆
    otex.beginPath();
    otex.arc(300,300,200,0,2*Math.PI);
    otex.fillStyle="green";
    otex.fill();
    otex.closePath();
    otex.stroke();

    //扇形
    otex.save();
    otex.translate(300, 300);
    otex.beginPath();
    otex.fillStyle="red";
    otex.arc(0,0,200,Math.PI/2,3*Math.PI/4);
    otex.save();
    otex.rotate(3*Math.PI/4);
    otex.moveTo(200,0);
    // 连接到圆心
    otex.lineTo(0,0);
    // 还原
    otex.restore();
    // 旋转至起点角度
    otex.rotate(Math.PI/2);
    // 从圆心连接到起点
    otex.lineTo(200,0);
    otex.fill();
    otex.closePath();
    // 还原到最初保存的状态
    otex.restore();

    otex.save();
    otex.translate(300, 300);
    otex.beginPath();
    otex.fillStyle="blue";
    otex.arc(0,0,200,-Math.PI/3,Math.PI/2);
    otex.save();
    otex.rotate(Math.PI/2);
    otex.moveTo(200,0);
    // 连接到圆心
    otex.lineTo(0,0);
    // 还原
    otex.restore();
    // 旋转至起点角度
    otex.rotate(-Math.PI/3);
    // 从圆心连接到起点
    otex.lineTo(200,0);
    otex.fill();
    otex.closePath();
    // 还原到最初保存的状态
    otex.restore();




    
})();