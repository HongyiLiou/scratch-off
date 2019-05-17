

var canvas = document.getElementById("canvas")
	var  ctx =  canvas.getContext('2d')


//銀漆
ctx.beginPath()
	var grd=ctx.createLinearGradient(0,0,400,300)
	grd.addColorStop(0,"#FFF")
	grd.addColorStop(1,"#999")
	ctx.fillStyle = grd
// context.fillRect(0,0,175,50);
//         context.fillStyle= 'grey'
	ctx.fillRect(0,0,400,300)


//滑鼠按住-刮開銀漆
canvas.onmousedown=function(){
	canvas.onmousemove = function(){
		//獲取物件內滑鼠座標
		var x = event.offsetX
		var y  = event.offsetY
		// console.log(x,y);
		//destination-out           關鍵程式碼-自己查XD
		ctx.globalCompositeOperation = "destination-out"
		ctx.beginPath()
		ctx.arc(x,y,50,0,Math.PI*2)
		ctx.fill()
	}
}
//滑鼠放開不繼續刮
canvas.onmouseup=function(){
	canvas.onmousemove = function(){    
	}
}